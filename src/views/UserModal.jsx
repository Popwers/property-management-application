const { Component } = wp.element;
import { connect } from 'react-redux';

import styled from 'styled-components';
import IconPencil from '../resources/pencil.svg';
import IconDefault from '../resources/userDefault.svg';
import { Text, StyledButton } from '../theme/design/componentsDesign';

const Avatar = styled.div`
    overflow: hidden;
    min-width: 130px;
    min-height: 130px;
    width: 130px;
    height: 130px;
    border-radius: 130px;
    margin: 0 auto;
    margin-bottom: 30px;

    img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
    }
`

class UserModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let avatar = IconDefault;
        if (this.props.modalData.avatar && this.props.modalData.avatar != 'default') {
            avatar = this.props.modalData.avatar;
        }

        return (
            <>  
                <Avatar>
                    <img src={avatar} />
                </Avatar>
                <StyledButton src iconRight small alignCenter>Modifier <img src={IconPencil} /></StyledButton>
                <Text textCenter margin='30px 0px 20px 0px' fontSize='26px'>{this.props.modalData.first_name} {this.props.modalData.last_name}</Text>
                <Text textCenter light margin='5px 0px'>{this.props.modalData.telephone}</Text>
                <Text textCenter light margin='5px 0px'>{this.props.modalData.user_email}</Text>
                <Text textCenter margin='40px 0px 20px 0px' fontSize='20px'>Adresse</Text>
                <Text textCenter light margin='5px 0px'>{this.props.modalData.adresse_postale_1}</Text>
                <Text textCenter light margin='5px 0px'>{this.props.modalData.ville}, {this.props.modalData.zip_code_postal}</Text>
                <Text textCenter light margin='5px 0px'>{this.props.modalData.pays}</Text>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const mapStateToProps = (state) => {
    return {
        modalData: state.manageUser.seeUser
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModal)