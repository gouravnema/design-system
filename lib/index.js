import styled_components from "styled-components";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import react from "react";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import classnames from "classnames";
import { Link } from "react-router-dom";
import humanize_duration from "humanize-duration";
const COLORS = {
    blue: '#007AFF',
    green: '#34C759',
    dark_green: '#049729',
    red: '#FF3B30',
    dark_red: '#CF0B00',
    orange: '#FF9500',
    dark_orange: '#CF6500',
    light_gray: '#EFEFF4',
    medium_gray: '#C7C7CC',
    dark_gray: '#8E8E93',
    text_dark: '#1C1C1E',
    text_light: '#636366',
    background: '#F2F2F7',
    card_background: 'rgba(255, 255, 255, 0.9)'
};
const TYPOGRAPHGY = {
    font_family: 'Arial',
    font_weight: 'normal'
};
const SIZES = {
    xs: '12px',
    sm: '12px',
    md: '12px',
    lg: '12px',
    xl: '12px'
};
const WEIGHTS = {
    xs: '300px',
    sm: '300px',
    md: '300px',
    lg: '300px',
    xl: '300px'
};
const RADIUS = {
    small: '8px',
    medium: '12px'
};
const SHADOW = {
    light: '0 1px 3px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 10px rgba(0, 0, 0, 0.1)'
};
const ZINDEX = {
    modal: 1000,
    side_nav: 900,
    header: 800,
    footer: 700,
    content: 600
};
const Background = styled_components.div`
    background: ${COLORS.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: ${TYPOGRAPHGY.font_family};
    font-weight: ${TYPOGRAPHGY.font_weight};
`;
const Buttons = styled_components.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: white;
    border: none;
    border-radius: ${RADIUS.small};
    font-size: 1rem;
    font-weight: 200;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
    margin-top: 10px;
`;
const RedOutlineButton = styled_components(Buttons)`
    border: 1px solid red;
    background: white;
    color:red;
`;
const BlueOutlineButton = styled_components(Buttons)`
    border: 1px solid blue;
    background: white;
    color:blue;
`;
const PrimaryButton = styled_components(Buttons)`
    background-color: ${COLORS.blue};
    &:hover {
        background-color: #0056b3;
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`;
const SecondaryButton = styled_components(Buttons)`
    background-color: ${COLORS.light_gray};
    color: ${COLORS.text_dark};
    border: 1px solid ${COLORS.medium_gray};
    &:hover {
        background-color: ${COLORS.medium_gray};
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`;
const RoundButton = styled_components(Buttons)`
    color: white;
    border: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease, transform 0.1s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 122, 255, 0.3);
    }
`;
const PlayButton = styled_components(RoundButton)`
     background: ${COLORS.green};
     &:hover {
            background: ${COLORS.dark_green};
     }
 `;
const PauseButton = styled_components(RoundButton)`
    background: ${COLORS.orange};
    &:hover {
        background: ${COLORS.dark_orange};
    }
`;
const DoneButton = styled_components(RoundButton)`
    background: ${COLORS.red};
    &:hover {
        background: ${COLORS.dark_red};
    }
`;
const TimerDoneButton = (props)=>/*#__PURE__*/ jsx(DoneButton, {
        ...props,
        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
            icon: faStop
        })
    });
const TimerPauseButton = (props)=>/*#__PURE__*/ jsx(PauseButton, {
        ...props,
        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
            icon: faPause
        })
    });
const TimerPlayButton = (props)=>/*#__PURE__*/ jsx(PlayButton, {
        ...props,
        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
            icon: faPlay
        })
    });
const Card = styled_components.div`
    background-color: ${COLORS.card_background};
    padding: 10px;
    border-radius: ${RADIUS.medium};
    box-shadow: ${SHADOW.medium};
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    box-sizing: border-box;
`;
const Centered = styled_components.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const ModalWrapper = styled_components.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: ${COLORS.background};
    overflow: auto;
    z-index: ${ZINDEX.modal};
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal-card{
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        .btn-close{
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 68%;
            align-self: flex-end;
        }
        .content{
            display: flex;
            flex-direction: column;
        }
    }
`;
const Modal = ({ children, shouldShow, onClose })=>shouldShow ? /*#__PURE__*/ jsx(ModalWrapper, {
        "data-qa": "ModalWrapper Cer",
        children: /*#__PURE__*/ jsxs(Card, {
            className: 'modal-card',
            children: [
                /*#__PURE__*/ jsx("div", {
                    className: 'btn-close',
                    role: 'button',
                    onClick: onClose,
                    children: "X"
                }),
                /*#__PURE__*/ jsx("div", {
                    className: 'content',
                    children: children
                })
            ]
        })
    }) : null;
const ModalContent = styled_components.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    p.description{
        margin: 10px 0;
    }
    div.confirm-actions{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
    }
`;
const confirm_button_ConfirmButton = ({ onConfirm = ()=>{}, onCancel = ()=>{}, label = "", confirmText = "Are you sure?", confirmTitle = "Confirmation?", ButtonComponent = SecondaryButton, ...rest })=>{
    const [toggle, setToggle] = react.useState(false);
    const ConfirmModal = /*#__PURE__*/ jsx(Modal, {
        onClose: ()=>setToggle(false),
        shouldShow: toggle,
        children: /*#__PURE__*/ jsxs(ModalContent, {
            className: "confirm-modal",
            children: [
                /*#__PURE__*/ jsx("h3", {
                    children: confirmTitle
                }),
                /*#__PURE__*/ jsx("p", {
                    className: "description",
                    children: confirmText
                }),
                /*#__PURE__*/ jsxs("div", {
                    className: "confirm-actions",
                    children: [
                        /*#__PURE__*/ jsx(SecondaryButton, {
                            onClick: (e)=>{
                                setToggle(false);
                                onCancel(e);
                            },
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ jsx(PrimaryButton, {
                            onClick: (e)=>{
                                setToggle(false);
                                onConfirm(e);
                            },
                            children: "Confirm"
                        })
                    ]
                })
            ]
        })
    });
    const ConfirmButton = /*#__PURE__*/ jsx(ButtonComponent, {
        ...rest,
        onClick: (e)=>{
            e.preventDefault();
            setToggle(true);
        },
        children: label
    });
    return /*#__PURE__*/ jsx(Fragment, {
        children: toggle ? ConfirmModal : ConfirmButton
    });
};
const DateFormatter = ({ milliseconds })=>{
    let dt = moment(milliseconds);
    return /*#__PURE__*/ jsx("span", {
        children: dt.format('DD/MM/YY hh:mmA')
    });
};
const doughnutChart_COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042"
];
const DoughnutChart = ({ chartName = '', data })=>{
    data.reduce((acc, item)=>acc + item.value, 0);
    return /*#__PURE__*/ jsx(ResponsiveContainer, {
        width: '100%',
        height: '100%',
        children: /*#__PURE__*/ jsxs(PieChart, {
            children: [
                /*#__PURE__*/ jsx(Pie, {
                    data: data,
                    dataKey: "value",
                    nameKey: "name",
                    cx: "50%",
                    cy: "50%",
                    innerRadius: '60%',
                    outerRadius: '80%',
                    fill: "#8884d8",
                    labelLine: false,
                    children: data.map((entry, index)=>/*#__PURE__*/ jsx(Cell, {
                            fill: entry.color ? entry.color : doughnutChart_COLORS[index % doughnutChart_COLORS.length]
                        }, `cell-${index}`))
                }),
                /*#__PURE__*/ jsx(Tooltip, {}),
                /*#__PURE__*/ jsx("text", {
                    x: "50%",
                    y: "50%",
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    style: {
                        fontSize: "1vw",
                        fontWeight: "bold"
                    },
                    children: chartName
                })
            ]
        })
    });
};
const MyForm = styled_components.form`
    display: flex;
`;
const Form = ({ children, onSubmit, className })=>{
    const handler = (e)=>{
        e.preventDefault();
        onSubmit(e);
    };
    return /*#__PURE__*/ jsx(MyForm, {
        className: 'form ' + className,
        onSubmit: handler,
        children: children
    });
};
const H1 = styled_components.h1`
    color: ${COLORS.blue};
`;
const H4 = styled_components.h4`
    color: ${COLORS.blue};
    text-align: left;
`;
const SummaryBox = styled_components.div`
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 5px;
    padding: 5px;
    min-width: 100px;
    background: #fffef0;
    color: #505050;

    .label {
        font-weight: bold;
    }

    .value {

    }
`;
const LabelText = ({ label, text })=>/*#__PURE__*/ jsxs(SummaryBox, {
        children: [
            /*#__PURE__*/ jsxs("span", {
                className: 'label',
                children: [
                    label,
                    ":"
                ]
            }),
            /*#__PURE__*/ jsx("span", {
                className: 'value',
                children: text
            })
        ]
    });
const Base = styled_components.span`
    padding: 5px;
    border-radius: ${RADIUS.small};
`;
const Pills = ({ label, children, ...rest })=>/*#__PURE__*/ jsxs(Base, {
        ...rest,
        children: [
            " ",
            label,
            " :  ",
            /*#__PURE__*/ jsx("em", {
                children: children
            })
        ]
    });
const PrimaryPill = styled_components(Pills)`
    background: ${COLORS.blue};
    color: white;
`;
const SecondaryPill = styled_components(Pills)`
    background: ${COLORS.medium_gray};
    color: ${COLORS.text_dark};
`;
const TransparentPill = styled_components(Pills)`
    color: ${(props)=>props.color || COLORS.text_dark};
    border: 1px solid ${(props)=>props.color || COLORS.light_gray};
`;
const ProgressBar = styled_components.div`
    width: 100%;
    height: 10px;
    background-color: ${(props)=>props.backgroundColor || '#e0e0e0'};
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: ${(props)=>props.shadow || '0 2px 4px rgba(0, 0, 0, 0.1)'};
    margin: 10px 0;
    transition: width 0.3s ease-in-out;

    &::after {
        content: '';
        display: block;
        width: ${(props)=>props.progress || '0%'};
        height: 100%;
        background-color: ${(props)=>props.color || '#34C759'};
        transition: width 0.3s ease-in-out;
        z-index: 1; /* Ensure this is on top */
        position: absolute;
        top: 0;
        left: 0;
    }

    &::before {
        content: '';
        display: block;
        width: ${(props)=>props.progress2 || '0%'};
        height: 100%;
        background-color: ${(props)=>props.color2 || '#FFCC00'};
        transition: width 0.3s ease-in-out;
        z-index: 2; /* Ensure this is on top of the first bar */
        position: absolute;
        top: 0;
        left: ${(props)=>props.progress || '0%'}; /* Position next to the first progress bar */
    }
`;
const Wrapper = styled_components.aside`
    min-width: 250px;
    background-color: ${COLORS.card_background};
    box-shadow: ${SHADOW.medium};
    padding: 20px 0;
    border-right: 1px solid ${COLORS.light_gray};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
`;
const Body = styled_components.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        

        li {
            max-width: 250px;
            display: list-item;
            text-align: -webkit-match-parent;
            unicode-bidi: isolate;
            a{
                img{
                    width: 100%;
                }
            }
        }

        a {
            text-decoration: none;
            color: ${COLORS.text_dark};
            display: flex;
            align-items: center;
            padding: 10px 20px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: ${COLORS.light_gray};
            }

            &.active {
                background-color: ${COLORS.blue};
                color: white;
                box-shadow: ${SHADOW.light};
            }
        }
    }
`;
const Header = styled_components.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px 30px;
    position: relative;
`;
const SideNav = ({ logo, links })=>/*#__PURE__*/ jsxs(Wrapper, {
        children: [
            /*#__PURE__*/ jsx(Header, {}),
            /*#__PURE__*/ jsx(Body, {
                children: /*#__PURE__*/ jsxs("ul", {
                    children: [
                        /*#__PURE__*/ jsx("li", {
                            children: logo
                        }),
                        Object.entries(links).sort((a, b)=>a[1].order - b[1].order).map(([key, link])=>/*#__PURE__*/ jsx("li", {
                                children: /*#__PURE__*/ jsxs(Link, {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '10px 20px'
                                    },
                                    className: classnames({
                                        active: link.active
                                    }),
                                    onClick: link.onClick,
                                    to: link.to,
                                    children: [
                                        /*#__PURE__*/ jsx(FontAwesomeIcon, {
                                            icon: link.icon,
                                            style: {
                                                marginRight: '10px'
                                            }
                                        }),
                                        link.label
                                    ]
                                })
                            }, key))
                    ]
                })
            })
        ]
    });
const TabWrapper = styled_components.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    margin: 10px;
    width: calc(100% - 20px);
    .tabs {
        padding: 5px;
        display: flex;
        gap:15px;
        button {
            width: 150px;
        }
    }
    .tab-content{
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap:5px;
        overflow-y: scroll;
    }
`;
const Tabs = ({ tabs, onTabChange, content })=>{
    const tabStops = tabs.map((tab)=>{
        const tabClickHandler = (e)=>{
            e.preventDefault();
            e.stopPropagation();
            onTabChange(tab.value);
        };
        return tab.active ? /*#__PURE__*/ jsx(PrimaryButton, {
            onClick: tabClickHandler,
            children: tab.label
        }) : /*#__PURE__*/ jsx(SecondaryButton, {
            onClick: tabClickHandler,
            children: tab.label
        });
    });
    return /*#__PURE__*/ jsxs(TabWrapper, {
        children: [
            /*#__PURE__*/ jsx("div", {
                className: 'tabs',
                children: tabStops
            }),
            /*#__PURE__*/ jsx("div", {
                className: 'tab-content',
                children: content
            })
        ]
    });
};
const InputGroup = styled_components.div`
    width: 100%;
    margin-bottom: 20px;
    text-align: left;
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: 1px solid ${COLORS.medium_gray};
        border-radius: ${RADIUS.small};
        font-size: 1em;
        color: ${COLORS.text_dark};
        background-color: rgba(255, 255, 255, 0.7);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
`;
const Label = styled_components.label`
    display: block;
    margin-bottom: 8px;
    font-size: 0.9em;
    color: ${COLORS.text_light};
    font-weight: 500;
`;
const TextInput = ({ label = null, ...props })=>/*#__PURE__*/ jsxs(InputGroup, {
        children: [
            label && /*#__PURE__*/ jsx(Label, {
                children: label
            }),
            /*#__PURE__*/ jsx("input", {
                ...props
            })
        ]
    });
const TimeFormatter = ({ timeInSeconds, color, humanize })=>{
    const singleDigitToDoubleDigit = (d)=>d < 10 ? "0" + d : String(d);
    let totalSec = Math.floor(timeInSeconds);
    let displayColor = color;
    if (totalSec < 0) {
        displayColor = "red";
        totalSec *= -1;
    }
    let hrs = Math.floor(totalSec / 3600);
    let min = Math.floor(totalSec % 3600 / 60);
    let sec = Math.floor(totalSec % 3600 % 60);
    if (humanize) return /*#__PURE__*/ jsx("span", {
        style: {
            display: "inline-block",
            color: displayColor
        },
        children: humanize_duration(1000 * totalSec)
    });
    return /*#__PURE__*/ jsxs("span", {
        style: {
            display: "inline-block",
            color: displayColor
        },
        children: [
            /*#__PURE__*/ jsx("span", {
                className: "time-hrs",
                children: singleDigitToDoubleDigit(hrs)
            }),
            /*#__PURE__*/ jsx("span", {
                className: "time-sep",
                children: ":"
            }),
            /*#__PURE__*/ jsx("span", {
                className: "time-min",
                children: singleDigitToDoubleDigit(min)
            }),
            /*#__PURE__*/ jsx("span", {
                className: "time-sep",
                children: ":"
            }),
            /*#__PURE__*/ jsx("span", {
                className: "time-sec",
                children: singleDigitToDoubleDigit(sec)
            })
        ]
    });
};
const Navbar = styled_components.div``;
const NavbarBrand = styled_components.div``;
const NavbarToggler = styled_components.div``;
const TopNavigation = ({ toggleShowSideNav })=>/*#__PURE__*/ jsxs(Navbar, {
        children: [
            /*#__PURE__*/ jsx(NavbarBrand, {
                children: /*#__PURE__*/ jsx("span", {})
            }),
            /*#__PURE__*/ jsx(NavbarToggler, {
                onClick: toggleShowSideNav
            })
        ]
    });
export { Background, BlueOutlineButton, Buttons, COLORS, Card, Centered, confirm_button_ConfirmButton as ConfirmButton, DateFormatter, DoughnutChart, Form, H1, H4, Label, LabelText, Modal, PrimaryButton, PrimaryPill, ProgressBar, RADIUS, RedOutlineButton, SHADOW, SIZES, SecondaryButton, SecondaryPill, SideNav, TYPOGRAPHGY, Tabs, TextInput, TimeFormatter, TimerDoneButton, TimerPauseButton, TimerPlayButton, TopNavigation, TransparentPill, WEIGHTS, ZINDEX };
