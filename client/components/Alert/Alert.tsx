import * as React from 'react';
import * as classNames from 'classnames';

import { setClassNames } from '../../utils/set-class-names';
import { Icon } from '../Icon/Icon';

declare interface props extends BaseProps {
    content: string;
    color?: string;
    duration?: number;
    isClosable?: boolean;
    onBeforeHide?: Function;
    onHide?: Function;
}

export class Alert extends React.Component<props, any> {
    durationTimeout;
    leaveTimeout;
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            isClosed: false
        }
    }

    componentDidMount() {
        if (this.props.duration) {
            this.durationTimeout = setTimeout(() => {
                this.handleClose();
            }, this.props.duration);
        }
    }

    componentWillUnmount() {
        if (this.leaveTimeout) clearTimeout(this.leaveTimeout);
        if (this.durationTimeout) clearTimeout(this.durationTimeout);
    }

    render() {
        if (this.state.isClosed) return false;

        return (
            <div
                className={this.setClassNames()}
                style={{
                    overflow: 'hidden',
                    transition: 'height 0.5s ease-in-out, opacity 0.3s ease-in-out',
                    height: !this.state.isOpen ? 0 : 'auto',
                    opacity: !this.state.isOpen ? 0 : 1
                }}
            >
                {
                    this.props.isClosable ?
                    <a className="uk-alert-close" onClick={this.handleClose.bind(this)}>
                        <Icon options="close" />
                    </a>
                    :
                    null
                }
                <span>{this.props.content}</span>
            </div>
        );
    }

    private handleClose() {
        this.setState({
            isOpen: false
        }, () => {
            if (this.props.onBeforeHide) this.props.onBeforeHide();
            this.leaveTimeout = setTimeout(() => {
                this.setState({ isClosed: true });
                if (this.props.onHide) this.props.onHide();
            }, 505);
        });
    }

    private setClassNames(): string {
        return classNames('uk-alert', {
            [`uk-alert-${this.props.color}`]: !!this.props.color,
            [setClassNames(this.props)]: true
        });
    }
}