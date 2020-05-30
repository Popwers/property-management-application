import { connect } from 'react-redux';
import { getAllProprietes, getAllDossiers, getAllUsers } from '../actions';
import axios from 'axios';

import styled, { css } from 'styled-components';
import Icon from '../resources/trash.svg';

const Button = styled.button`
    width: 30px;
    height: 45px;
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
    transition: transform 0.3s;

    img {
        width: 100% !important;
        height: 100% !important;
        object-fit: contain;
        border-radius: 0 !important;
        box-shadow: none !important;
    }

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`

function DeleteButton(props) {
    function handleDelete() {
        console.log(props.id);
        console.log(props.type);

        switch (props.type) {
            case 'propriete':
                deletePropriete(props.id);
                break;

            case 'dossier':
                deleteDossier(props.id);
                break;

            case 'user':
                deleteUser(props.id);
                break;
        }

        async function deletePropriete(id) {
            let responseReq = null;
            let statutRes = 'success';

            let formData = new FormData();
            formData.append('action', 'form_delete_propriete');
            formData.append('id', id);

            await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', formData)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

            props.getAllProprietes();
        };

        async function deleteUser(id) {
            let responseReq = null;
            let statutRes = 'success';

            let formData = new FormData();
            formData.append('action', 'form_delete_user');
            formData.append('id', id);

            await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', formData)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

            props.getAllUsers();
        };

        async function deleteDossier(id) {
            let responseReq = null;
            let statutRes = 'success';

            let formData = new FormData();
            formData.append('action', 'form_delete_dossier');
            formData.append('id', id);

            await axios.post('../wp-content/themes/themeplocatif/ajax-board.php', formData)
            .then(function (response) {
                responseReq = formatToJson(response.data);
                if (responseReq == 'fail') {
                    statutRes = 'success';
                    responseReq = null;
                }
            })
            .catch(function (error) {
                responseReq = error;
                statutRes = 'error';
            });

            props.getAllDossiers()
        };
    }

    return (
        <Button onClick={handleDelete} >
            <img src={Icon} alt="icon delete" />
        </Button>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProprietes: () => dispatch(getAllProprietes()),
        getAllDossiers: () => dispatch(getAllDossiers()),
        getAllUsers: () => dispatch(getAllUsers()),
    }
}

export default connect(null, mapDispatchToProps)(DeleteButton)