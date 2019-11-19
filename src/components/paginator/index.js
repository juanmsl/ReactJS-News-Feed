import React from 'react';

class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsByPage: 15,
            page: 0,
            count: props.children.length
        };
    }

    prevPage = () => {
        const {page} = this.state;
        if (page > 0) {
            this.setState({page: page - 1});
        }
    };

    nextPage = () => {
        const {page, itemsByPage} = this.state;
        const {children} = this.props;
        const pages = Math.ceil(children.length / itemsByPage);

        if (page < pages - 1) {
            this.setState({page: page + 1});
        }
    };

    renderPages = () => {
        const {page, itemsByPage} = this.state;
        const {children} = this.props;
        const pages = Math.ceil(children.length / itemsByPage);

        let firstIndex = page - 2 >= 0 ? page - 2 : 0;
        let lastIndex = firstIndex + 4 < pages ? firstIndex + 4 : pages - 1;
        firstIndex = lastIndex === pages - 1 ? lastIndex - 4 : firstIndex;
        firstIndex = firstIndex < 0 ? 0 : firstIndex;

        const buttons = [];
        for(let i = firstIndex; i <= lastIndex; i++) {
            buttons.push(
                <button key={i} className={`aca-paginator__button ${i === page ? "selected" : ""}`} onClick={() => this.setState({page: i})}>{i + 1}</button>
            );
        }
        return buttons;
    };

    render() {
        const {className, children} = this.props;
        const {page, itemsByPage} = this.state;
        const firstIndex = page * itemsByPage;
        const lastIndex = firstIndex + itemsByPage;
        const currentData = children.slice(firstIndex, lastIndex);
        const pages = Math.ceil(children.length / itemsByPage);
        console.log(children.length, itemsByPage, children.length / itemsByPage, pages);

        return (
            <section>
                <section className={className}>
                    {currentData}
                </section>
                <section className="aca-paginator">
                    <button className="aca-paginator__button" onClick={() => this.setState({page: 0})} disabled={page === 0}>{"<<"}</button>
                    <button className="aca-paginator__button" onClick={this.prevPage} disabled={page === 0}>{"<"}</button>
                    {this.renderPages()}
                    <button className="aca-paginator__button" onClick={this.nextPage} disabled={page === pages - 1}>{">"}</button>
                    <button className="aca-paginator__button" onClick={() => this.setState({page: pages - 1})} disabled={page === pages - 1}>{">>"}</button>
                </section>
            </section>
        );
    }
}

export default Paginator;