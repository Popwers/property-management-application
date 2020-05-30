const { Component } = wp.element;

import axios from 'axios';
import { connect } from 'react-redux';
import { handleChangeAddChasseurModal, registerDataProgress, toogleAddChasseur } from '../actions';
import { formatToJson } from '../lib/functions';

import Input from '../components/Input';
import { RowInput, TitleForm, Form, SendButton } from '../theme/design/componentsDesign';

class AddChasseur extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const fakeID = '_' + Math.random().toString(36).substr(2, 9);
        this.props.toogleAddChasseur();
        this.props.handleChangeModal('resetTheForm', true);
        event.preventDefault();

        let data = new FormData();
        data.append('action', 'form_add_user');

        for (var key in this.props.modalData) {
            if (key != 'filesPhotosChasseur' && this.props.modalData[key] != null) {
                data.append(key, this.props.modalData[key]);
            } else {
                if (this.props.modalData[key] != null) {
                    for (var item of this.props.modalData[key]) {
                        data.append('files[]', item);
                    }
                }
            }
        }

        axios.post('../wp-content/themes/themeplocatif/ajax-board.php', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progress => {
                const { loaded, total } = progress;
                const percentageProgress = Math.floor((loaded / total) * 90);
                this.props.registerDataProgress(fakeID, percentageProgress);
            },
        })
            .then(response => {
                let result = formatToJson(response.data);
                if (result.id == null) {
                    console.log('error');
                }
            })
            .catch(error => {
                console.log(error);
            })
            .then(() => {
                this.props.registerDataProgress(fakeID, 100);
            });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>

                <RowInput dispatch>
                    <TitleForm isFirst>Détails</TitleForm>
                    <Input value={this.props.modalData.filesPhotosChasseur} onChange={this.props.handleChangeModal} type="file" id="filesPhotosChasseur" multiple="false" accept=".png, .jpg, .jpeg" label='Ajouter une photo de profil' />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.pseudo} onChange={this.props.handleChangeModal} required type="text" id="pseudo" label="Pseudo" />
                    <Input value={this.props.modalData.first_name} onChange={this.props.handleChangeModal} required type="text" id="first_name" label="Prénom" />
                    <Input value={this.props.modalData.last_name} onChange={this.props.handleChangeModal} required type="text" id="last_name" label="Nom" />
                </RowInput>

                <RowInput>
                    <Input value={this.props.modalData.telephone} onChange={this.props.handleChangeModal} required tel type="number" id="telephone" label="Téléphone" />
                    <Input value={this.props.modalData.mail} onChange={this.props.handleChangeModal} required type="email" id="mail" label="e-Mail" />
                </RowInput>

                <SendButton noMarginLeft type="submit">Enregistrer</SendButton>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChangeModal: (key, data) => dispatch(handleChangeAddChasseurModal(key, data)),
        registerDataProgress: (key, data) => dispatch(registerDataProgress(key, data)),
        toogleAddChasseur: () => dispatch(toogleAddChasseur()),
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.addModal.addChasseurModal
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChasseur)