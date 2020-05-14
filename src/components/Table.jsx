const { Component } = wp.element;

const LineTable = (props) => {
    let listItems = new Array();

    props.orderKeys.forEach(searchKey => {
        for (let [key, value] of Object.entries(props.object)) {
            if (searchKey == key) {
                listItems.push(key == 'id' ? <th scope="row">{value}</th> : <td>{value}</td>);
                break;
            }
        }
    });

    return (
        <tr key={props.id}>
            {listItems}
        </tr>
    )
}

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            isLoaded: null,
            error: null,
        }
    }

    componentDidMount() {
        fetch("http://immomalin.wpengine.com/wp-json/wp/v2/propriete")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result,
                        isLoaded: true,
                    });

                    console.log(result);

                    setTimeout(() => {
                        this.state.items[0]
                        let newResult = this.state.items;
                        newResult[0].frais_de_notaire = 34;
                        newResult[1].frais_de_notaire = 34;
                        newResult[4].frais_de_notaire = 34;
                        newResult[3].frais_de_notaire = 34;
                        newResult.pop();
                        console.log(newResult);

                        this.setState({
                            items: newResult,
                            isLoaded: true,
                        });
                    }, 10000);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: null,
                    })
                }
            );
    }

    render() {
        if (this.state.error) {
            return <div>Erreur : {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Chargement...</div>;
        } else {
            let tableItem = new Array();

            this.state.items.forEach(element => {
                let newElement = new Object;
                
                for (const key in element) {
                    if (Object.keys(this.props.listeProps).includes(key)) {
                       newElement[key] = element[key];
                    }
                }

                tableItem.push(newElement);
            });

            const headTable = Object.values(this.props.listeProps).map(item => (<th scope="col">{item}</th>));
            const contentTable = tableItem.map(item => <LineTable 
                                                            id={item.id} 
                                                            object={item} 
                                                            orderKeys={Object.keys(this.props.listeProps)} />);

            return (
                <table>
                    <thead>
                        <tr>
                            {headTable}
                        </tr>
                    </thead>

                    <tbody>
                        {contentTable}
                    </tbody>
                </table>
            );
        }
    }
}