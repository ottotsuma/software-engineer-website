import React, { Component } from "react";
import styled from "styled-components";


export default class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSubmitDisabled:
                this.props.custom &&
                this.props.custom.mustEqualToConfirm !== undefined,
            selected: !this.props.custom
                ? !this.props.choices
                    ? true
                    : this.props.choices[0].value
                : this.props.custom.selected,
            title: this.props.title,
            resolved: undefined,
            message: props.message,
            buttons: props.buttons,
            insert: props.insert,
        };
    }

    onChoiceClick = (selected) => {
        this.setState({ selected });
    };

    onCustomUpdate = (selected) => {
        const isSubmitDisabled =
            this.props.custom.mustEqualToConfirm &&
            this.props.custom.mustEqualToConfirm !== selected;
        this.setState({ selected, isSubmitDisabled });
        if (!this.props.submit) this.resolve(selected);
    };

    onCustomTitle = (title) => {
        this.setState({ title });
    };

    onKeyUp = (event) => {
        if (event.code === "Escape" && !this.props.isForced) this.reject();
    };

    componentDidMount() {
        if (!this.props.isForced)
            window.addEventListener("keyup", this.onKeyUp);
        console.log(this.props, "Shaun");
    }

    componentWillUnmount() {
        if (this.props.cancel)
            window.removeEventListener("keyup", this.onKeyUp);
    }

    getMessage() {
        return { __html: this.state.message };
    }

    onClickSubmit = () => {
        if (this.state.isSubmitDisabled) return;
        this.resolve(this.state.selected);
    };

    resolve = (value) => {
        this.setState({ resolved: "has-submitted" }, () => {
            setTimeout(() => {
                if (this.props.customResolve) {
                    this.props.customResolve(value);
                } else {
                    this.props.resolve(value);
                }
            }, 150);
        });
    };

    reject = () => {
        this.setState({ resolved: "has-canceled" }, () => {
            setTimeout(() => {
                this.props.reject();
            }, 150);
        });
    };

    render() {
        return (
            <div
                className={`modal is-active is-${this.props.type} ${
                    this.props.styles.dialog || ""
                } ${this.state.resolved || ""}`}
            >
                <div
                    className="modal-background"
                    onClick={
                        !this.props.isForced &&
                        !!this.props.reject &&
                        this.reject
                    }
                ></div>
                <div className="modal-card">
                    <header className="modal-card-title">
                        {this.props.icon && <i className={this.props.icon}></i>}
                        {/* {this.props.iconComponent && (
                            <FontAwesomeIcon
                                icon={this.props.iconComponent}
                                size="xs"
                            />
                        )} */}
                        {!this.props.isForced && (
                            <span
                                className="modal-card-title-close"
                                onClick={!!this.props.reject && this.reject}
                            >
                                <i className="fas fa-times"></i>
                            </span>
                        )}
                        {this.props.custom && <h2>{this.state.title}</h2>}
                    </header>
                    <section
                        className={`modal-card-body ${
                            this.props.styles.body || ""
                        }`}
                    >
                        {!this.props.custom && this.state.title && (
                            <h3>{this.state.title}</h3>
                        )}
                        {this.state.message && (
                            <div
                                className="modal-message"
                                dangerouslySetInnerHTML={this.getMessage()}
                            ></div>
                        )}
                        {this.state.insert ? this.state.insert : <div></div>}
                        {this.props.choices && (
                            <ul className="radio-button-set">
                                {this.props.choices.map((item) => (
                                    <li
                                        key={item.label}
                                        onClick={() => {
                                            this.onChoiceClick(item.value);
                                        }}
                                    >
                                        <div
                                            className={`radio-button ${
                                                item.value ===
                                                this.state.selected
                                                    ? "selected"
                                                    : ""
                                            }`}
                                        >
                                            <div className="radio-button-dot"></div>
                                        </div>
                                        <span className="radio-button-label">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                    {
                        <footer className="modal-card-footer">
                            {this.state.buttons.map((button, index) => (
                                <a
                                    key={index}
                                    className={"button is-large"}
                                    onClick={() =>
                                        button.onClick({
                                            setState: (state) => {
                                                this.setState(state);
                                            },
                                            getState: () => this.state,
                                        })
                                    }
                                >
                                    {button.text}
                                </a>
                            ))}
                        </footer>
                    }
                    {(this.props.submit || this.props.cancel) && (
                        <footer className="modal-card-footer">
                            {this.props.submit && (
                                <a
                                    className={`button is-${
                                        this.props.type
                                    } is-large ${
                                        this.state.isSubmitDisabled
                                            ? "is-on-dark is-disabled"
                                            : ""
                                    }`}
                                    onClick={this.onClickSubmit}
                                >
                                    {this.props.submit}
                                </a>
                            )}
                            {this.props.cancel && !this.props.isForced && (
                                <a
                                    className="button is-cancel is-large"
                                    onClick={!!this.props.reject && this.reject}
                                >
                                    {this.props.cancel}
                                </a>
                            )}
                        </footer>
                    )}
                </div>
            </div>
        );
    }
}
