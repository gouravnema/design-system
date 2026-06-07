import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import react, { useState } from "react";
import styled_components from "styled-components";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import classnames from "classnames";
import { faBars, faChevronDown, faChevronUp, faClose, faPause, faPhone, faPlay, faStop, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import moment from "moment";
import humanize_duration from "humanize-duration";
var package_namespaceObject = {
    rE: "2.1.1"
};
const COLORS = {
    base: '#E0E5EC',
    baseLight: '#F5F7FA',
    baseDark: '#A3B1C6',
    baseBorder: '#738196',
    blue: '#5F7FD4',
    green: '#5FB36D',
    dark_green: '#4A8A54',
    red: '#D85F6F',
    dark_red: '#B84C5A',
    orange: '#D99B5F',
    dark_orange: '#B87A47',
    text_dark: '#3A3F47',
    text: '#4A4F57',
    text_light: '#6B7280',
    background: '#E0E5EC',
    card_background: '#E0E5EC',
    light_gray: '#F5F7FA',
    medium_gray: '#C9D1DC',
    dark_gray: '#8FA3BD'
};
const RADIUS = {
    small: '12px',
    medium: '20px',
    large: '30px',
    full: '50%'
};
const SHADOW = {
    insetLight: 'inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)',
    insetMedium: 'inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)',
    insetDark: 'inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)',
    light: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)',
    medium: '5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)',
    medium2: '5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)',
    large: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)'
};
const sizes_SIZES = {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px'
};
const VIEWPORT = {
    small_mobile: "480px",
    mobile: "768px",
    tablet: "1024px",
    desktop: "1440px",
    fullHd: "1920px",
    desktop4K: "3840px"
};
const TYPOGRAPHGY = {
    font_family: 'Arial',
    font_weight: 'normal'
};
const WEIGHTS = {
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
};
const ZINDEX = {
    modal: 1000,
    side_nav: 900,
    header: 800,
    footer: 700,
    content: 600
};
import heads_sprite_namespaceObject from "./static/image/heads_sprite.webp";
const AvatarImage = styled_components.img`
  width: ${(props)=>props.size}px;
  height: ${(props)=>props.size}px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.12), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8);
  }
`;
const Avatar = ({ size = 50, src, alt = 'User Avatar', ...rest })=>/*#__PURE__*/ jsx(AvatarImage, {
        size: size,
        src: src || heads_sprite_namespaceObject,
        alt: alt,
        ...rest
    });
const theme_constants_COLORS = {
    base: '#E0E5EC',
    baseLight: '#F5F7FA',
    baseDark: '#A3B1C6',
    blue: '#5F7FD4',
    green: '#5FB36D',
    dark_green: '#4A8A54',
    red: '#D85F6F',
    dark_red: '#B84C5A',
    orange: '#D99B5F',
    dark_orange: '#B87A47',
    text_dark: '#3A3F47',
    text_light: '#6B7280',
    background: '#E0E5EC',
    card_background: '#E0E5EC',
    light_gray: '#F5F7FA',
    medium_gray: '#C9D1DC',
    dark_gray: '#8FA3BD'
};
const theme_constants_TYPOGRAPHGY = {
    font_family: 'Arial',
    font_weight: 'normal'
};
const theme_constants_RADIUS = {
    small: '12px',
    medium: '20px',
    large: '30px',
    full: '50%'
};
const theme_constants_SHADOW = {
    insetLight: 'inset 2px 2px 5px rgba(255, 255, 255, 0.7), inset -2px -2px 5px rgba(0, 0, 0, 0.1)',
    insetMedium: 'inset 3px 3px 7px rgba(255, 255, 255, 0.8), inset -3px -3px 7px rgba(0, 0, 0, 0.15)',
    insetDark: 'inset 5px 5px 10px rgba(255, 255, 255, 0.9), inset -5px -5px 10px rgba(0, 0, 0, 0.2)',
    light: '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7)',
    medium: '5px 5px 10px rgba(0, 0, 0, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.8)',
    medium2: '5px 5px 12px rgba(0, 0, 0, 0.12), -5px -5px 12px rgba(255, 255, 255, 0.75)',
    large: '8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.9)'
};
const Card = styled_components.div`
    background-color: ${theme_constants_COLORS.base};
    padding: ${SIZES.lg};
    border-radius: ${theme_constants_RADIUS.medium};
    box-shadow: ${theme_constants_SHADOW.medium};
    border: none;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${theme_constants_SHADOW.large};
    }
`;
const NEOMORPHIC_COLORS = [
    theme_constants_COLORS.blue,
    theme_constants_COLORS.green,
    theme_constants_COLORS.orange,
    theme_constants_COLORS.red
];
const DoughnutChart = ({ chartName = '', data })=>/*#__PURE__*/ jsx(ResponsiveContainer, {
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
                            fill: entry.color ? entry.color : NEOMORPHIC_COLORS[index % NEOMORPHIC_COLORS.length]
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
const SwitchContainer = styled_components.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    aspect-ratio: 13 / 8 ;
    min-width: 13px;
    min-height: 8px;
    background-color: ${(props)=>props.isActive ? theme_constants_COLORS.green : theme_constants_COLORS.base};
    border: none;
    border-radius: 50vh;
    cursor: pointer;
    transition: background-color 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: ${(props)=>props.isActive ? theme_constants_SHADOW.medium : theme_constants_SHADOW.insetLight};

    &:hover {
        box-shadow: ${(props)=>props.isActive ? theme_constants_SHADOW.large : theme_constants_SHADOW.insetMedium};
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(95, 179, 109, 0.2);
    }
`;
const SwitchToggle = styled_components.div`
    position: absolute;
    width: auto;
    height: 100%;
    aspect-ratio: 1;
    background-color: ${theme_constants_COLORS.baseLight};
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: ${theme_constants_SHADOW.medium};
    left: 0;
    top: 0;

    ${SwitchContainer}[data-active='true'] & {
        transform: translateX(80%);
    }
`;
const Switch = ({ defaultState = false, onChange })=>{
    const [internalState, setInternalState] = react.useState(defaultState);
    const handleToggle = ()=>{
        const newState = !internalState;
        setInternalState(newState);
        onChange?.(newState);
    };
    return /*#__PURE__*/ jsx(SwitchContainer, {
        "data-active": internalState,
        onClick: handleToggle,
        role: "switch",
        "aria-checked": internalState,
        type: "button",
        isActive: internalState,
        children: /*#__PURE__*/ jsx(SwitchToggle, {})
    });
};
const Base = styled_components.span`
    padding: 8px 12px;
    border-radius: ${theme_constants_RADIUS.medium};
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
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
    background: ${theme_constants_COLORS.blue};
    color: white;
    box-shadow: ${theme_constants_SHADOW.light};

    &:hover {
        box-shadow: ${theme_constants_SHADOW.medium};
    }
`;
const SecondaryPill = styled_components(Pills)`
    background: ${theme_constants_COLORS.base};
    color: ${theme_constants_COLORS.text_dark};
    box-shadow: ${theme_constants_SHADOW.light};

    &:hover {
        box-shadow: ${theme_constants_SHADOW.medium};
    }
`;
const TransparentPill = styled_components(Pills)`
    color: ${theme_constants_COLORS.text_light};
    background: ${theme_constants_COLORS.baseLight};
    box-shadow: ${theme_constants_SHADOW.light};

    &:hover {
        box-shadow: ${theme_constants_SHADOW.medium};
    }
`;
const SpriteContainer = styled_components.div`
    width: ${(props)=>props.width}vw;
    height: ${(props)=>props.height}vw;
    background-image: url(${(props)=>props.src});
    background-position: ${(props)=>`-${props.positionX}vw -${props.positionY}vw`};
    background-size: ${(props)=>props.size + 'vw'};
    background-repeat: no-repeat;
    box-shadow: ${theme_constants_SHADOW.light};
    transition: all 0.3s ease;
    
    &:hover {
        box-shadow: ${theme_constants_SHADOW.medium};
    }

    &.rounded {
        border-radius: 50%;
    }
    max-height: ${(p)=>p.maxSize};
    max-width: ${(p)=>p.maxSize};
`;
const Sprite = ({ rounded = false, width, height, positionX, positionY, ...rest })=>/*#__PURE__*/ jsx(SpriteContainer, {
        className: classnames({
            rounded
        }),
        width: width,
        height: height,
        positionX: positionX,
        positionY: positionY,
        ...rest
    });
import people_heads_sprite_namespaceObject from "./static/image/heads_sprite.webp";
const cordX = [
    9,
    82,
    155,
    226
];
const cordY = [
    8,
    79,
    151,
    223
];
const map = cordX.reduce((acc, x, i)=>{
    cordY.forEach((y, j)=>{
        acc[`head_${i + 1}_${j + 1}`] = {
            x,
            y
        };
    });
    return acc;
}, {});
const Silhouette = ({ code, rounded, size = 10 })=>{
    const coords = map[code];
    const factor = size / 64;
    if (!coords) return null;
    return /*#__PURE__*/ jsx(Sprite, {
        rounded: rounded,
        width: size,
        height: size,
        maxSize: '64px',
        positionX: coords.x * factor,
        positionY: coords.y * factor,
        src: people_heads_sprite_namespaceObject,
        size: 300 * factor
    });
};
const InputGroup = styled_components.div`
    margin-bottom: 20px;
    text-align: left;
    label {
        display: block;
        margin-bottom: 8px;
        font-size: 0.9em;
        color: ${theme_constants_COLORS.text_light};
        font-weight: 500;
    }
    input {
        width: calc(100% - 24px);
        padding: 12px;
        border: none;
        border-radius: ${theme_constants_RADIUS.medium};
        font-size: 1em;
        color: ${theme_constants_COLORS.text_dark};
        background-color: ${theme_constants_COLORS.base};
        box-shadow: ${theme_constants_SHADOW.insetLight};
        transition: all 0.3s ease;

        &:focus {
            outline: none;
            box-shadow: ${theme_constants_SHADOW.insetMedium};
        }

        &:hover:not(:focus) {
            box-shadow: ${theme_constants_SHADOW.insetMedium};
        }

        &::placeholder {
            color: ${theme_constants_COLORS.medium_gray};
        }
    }
`;
const TextInput = ({ label, ...props })=>/*#__PURE__*/ jsxs(InputGroup, {
        children: [
            /*#__PURE__*/ jsx("label", {
                children: label
            }),
            /*#__PURE__*/ jsx("input", {
                ...props
            })
        ]
    });
const Buttons = styled_components.button`
    width: calc(100% - 24px);
    padding: 12px;
    color: ${COLORS.text_dark};
    background-color: ${COLORS.base};
    border: none;
    border-radius: ${RADIUS.medium};
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
    box-shadow: ${SHADOW.medium};
    
    &:hover {
        box-shadow: ${SHADOW.large};
        transform: translateY(-2px);
    }

    &:active {
        box-shadow: ${SHADOW.insetMedium};
        transform: translateY(0);
    }
`;
const RedOutlineButton = styled_components(Buttons)`
    background-color: ${COLORS.baseLight};
    color: ${COLORS.red};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        box-shadow: ${SHADOW.medium};
        color: ${COLORS.dark_red};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }
`;
const BlueOutlineButton = styled_components(Buttons)`
    background-color: ${COLORS.baseLight};
    color: ${COLORS.blue};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        box-shadow: ${SHADOW.medium};
        color: #4A5FB0;
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }
`;
const PrimaryButton = styled_components(Buttons)`
    background-color: ${COLORS.blue};
    color: white;
    
    &:hover {
        background-color: #4A5FB0;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetMedium};
    }
`;
const SecondaryButton = styled_components(Buttons)`
    background-color: ${COLORS.light_gray};
    color: ${COLORS.text_dark};
    box-shadow: ${SHADOW.light};
    
    &:hover {
        background-color: ${COLORS.baseLight};
        box-shadow: ${SHADOW.medium};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
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
    transition: all 0.3s ease;
    padding: 0;

    &:hover {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1px);
    }
`;
const PlayButton = styled_components(RoundButton)`
     background: ${COLORS.green};
     
     &:hover {
            background: #5FA35F;
            box-shadow: ${SHADOW.large};
     }

     &:active {
            box-shadow: ${SHADOW.insetDark};
     }
 `;
const PauseButton = styled_components(RoundButton)`
    background: ${COLORS.orange};
    
    &:hover {
        background: #C98A4F;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetDark};
    }
`;
const DoneButton = styled_components(RoundButton)`
    background: ${COLORS.red};
    
    &:hover {
        background: #C84D5C;
        box-shadow: ${SHADOW.large};
    }

    &:active {
        box-shadow: ${SHADOW.insetDark};
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
const ModalWrapper = styled_components.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    z-index: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);

    .modal-card {
        opacity: 1;
        max-width: 50vw;
        height: max-content;
        display: flex;
        flex-direction: column;
        @media (max-width: ${VIEWPORT.mobile}) {
            max-width: 100vw;
            height: 100vh;
            border-radius: 0;
        }

        .close {
            cursor: pointer;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            border-radius: 50%;
            align-self: flex-end;
            background: ${theme_constants_COLORS.base};
            color: ${theme_constants_COLORS.text_dark};
            transition: all 0.3s ease;

            &:hover {
                box-shadow: ${theme_constants_SHADOW.medium};
            }

            &:active {
                box-shadow: ${theme_constants_SHADOW.insetLight};
            }
        }

        .content {
            display: flex;
            flex-direction: column;
        }
    }
`;
const Modal = ({ children, shouldShow, onClose })=>shouldShow ? /*#__PURE__*/ jsx(ModalWrapper, {
        children: /*#__PURE__*/ jsxs(Card, {
            className: 'modal-card',
            children: [
                /*#__PURE__*/ jsx("div", {
                    className: 'close',
                    role: 'button',
                    onClick: onClose,
                    children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                        icon: faClose
                    })
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
const H1 = styled_components.h1`
    color: ${theme_constants_COLORS.blue};
`;
const H4 = styled_components.h4`
    color: ${theme_constants_COLORS.blue};
    text-align: left;
`;
const Wrapper = styled_components.p`
    font-size: ${(props)=>props.size || '1rem'};
    color: ${(props)=>props.color || 'black'};
    margin: ${(props)=>props.margin || '0'};
    padding: ${(props)=>props.padding || '0'};
    text-align: ${(props)=>props.align || 'left'};
`;
const Text = ({ children, ...rest })=>/*#__PURE__*/ jsx(Wrapper, {
        ...rest,
        children: children
    });
const ParsedText = ({ text, ...rest })=>{
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+$/;
    const phoneRegex = /^\+\d{1,3}-?\d{1,14}$/;
    const matchRegex = /(https?:\/\/[^\s]+|\+\d{1,3}-?\d{1,14}|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    while(null !== (match = matchRegex.exec(text))){
        if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
        const part = match[0];
        if (part.startsWith('+') && phoneRegex.test(part)) {
            const normalizedPhone = part.replace(/-/g, '');
            parts.push(/*#__PURE__*/ jsxs("span", {
                children: [
                    part,
                    " (",
                    /*#__PURE__*/ jsx("a", {
                        href: `whatsapp://send?phone=${normalizedPhone}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                            icon: faWhatsapp
                        })
                    }),
                    ", \xa0",
                    /*#__PURE__*/ jsx("a", {
                        href: `tel:${normalizedPhone}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                            icon: faPhone
                        })
                    }),
                    ")"
                ]
            }, parts.length));
        } else if (part.includes('@') && emailRegex.test(part)) parts.push(/*#__PURE__*/ jsx("a", {
            href: `mailto:${part}`,
            target: "_blank",
            rel: "noopener noreferrer",
            children: part
        }, parts.length));
        else if (part.startsWith('http://') || part.startsWith('https://')) parts.push(/*#__PURE__*/ jsx("a", {
            href: part,
            target: "_blank",
            rel: "noopener noreferrer",
            children: part
        }, parts.length));
        else parts.push(part);
        lastIndex = match.index + part.length;
    }
    if (lastIndex < text.length) parts.push(text.substring(lastIndex));
    return /*#__PURE__*/ jsx(Text, {
        ...rest,
        children: parts
    });
};
const DesktopWrapper = styled_components.aside`
    min-width: 250px;
    background-color: ${COLORS.base};
    box-shadow: ${SHADOW.medium};
    padding: 20px 0;
    border-right: none;
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
    z-index: 900;

    @media (max-width: ${VIEWPORT.mobile}) {
        display: none;
    }
`;
const Body = styled_components.div`
    flex-grow: 1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            display: list-item;
            margin: ${sizes_SIZES.xs};
        }

        a {
            text-decoration: none;
            color: ${COLORS.text_dark};
            display: flex;
            align-items: center;
            padding: 12px 20px;
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 0 10px;

            &:hover {
                background-color: ${COLORS.baseLight};
                box-shadow: ${SHADOW.light};
            }

            &.active {
                background-color: ${COLORS.blue};
                color: white;
                box-shadow: ${SHADOW.medium};
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
const MobileDrawerWrapper = styled_components.div`
    display: none;

    @media (max-width: ${VIEWPORT.mobile}) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1200;
    }
`;
const DrawerHandle = styled_components.button`
    width: 100%;
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

    .handle {
        width: 74px;
        height: 34px;
        border-radius: 18px 18px 0 0;
        background: ${COLORS.base};
        box-shadow: ${SHADOW.medium};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const DrawerBody = styled_components.div`
    background: ${COLORS.base};
    box-shadow: ${SHADOW.medium};
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    transition: all 0.3s ease;

    max-height: ${({ open })=>open ? "420px" : "0px"};

    ul {
        list-style: none;
        padding: 10px 0 20px;
        margin: 0;
    }

    li {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: ${COLORS.text_dark};
        display: flex;
        align-items: center;
        padding: 16px 20px;
        transition: all 0.2s ease;

        &:hover {
            background: ${COLORS.baseLight};
        }

        &.active {
            background-color: ${COLORS.blue};
            color: white;
        }
    }
`;
const SideNav = ({ logo, links })=>{
    const [mobileOpen, setMobileOpen] = useState(false);
    const sortedLinks = Object.entries(links).sort((a, b)=>a[1].order - b[1].order);
    return /*#__PURE__*/ jsxs(Fragment, {
        children: [
            /*#__PURE__*/ jsxs(DesktopWrapper, {
                className: "side-nav",
                children: [
                    /*#__PURE__*/ jsx(Header, {
                        children: logo
                    }),
                    /*#__PURE__*/ jsx(Body, {
                        children: /*#__PURE__*/ jsx("ul", {
                            children: sortedLinks.map(([key, link])=>/*#__PURE__*/ jsx("li", {
                                    children: /*#__PURE__*/ jsxs("a", {
                                        href: link.to,
                                        className: classnames({
                                            active: link.active
                                        }),
                                        onClick: link.onClick,
                                        children: [
                                            /*#__PURE__*/ jsx(FontAwesomeIcon, {
                                                icon: link.icon,
                                                style: {
                                                    marginRight: "10px"
                                                }
                                            }),
                                            link.label
                                        ]
                                    })
                                }, key))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsxs(MobileDrawerWrapper, {
                children: [
                    /*#__PURE__*/ jsx(DrawerHandle, {
                        onClick: ()=>setMobileOpen(!mobileOpen),
                        children: /*#__PURE__*/ jsx("div", {
                            className: "handle",
                            children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                                icon: mobileOpen ? faChevronDown : faChevronUp
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx(DrawerBody, {
                        open: mobileOpen,
                        children: /*#__PURE__*/ jsx("ul", {
                            children: sortedLinks.map(([key, link])=>/*#__PURE__*/ jsx("li", {
                                    children: /*#__PURE__*/ jsxs("a", {
                                        href: link.to,
                                        className: classnames({
                                            active: link.active
                                        }),
                                        onClick: (e)=>{
                                            link.onClick(e);
                                            setMobileOpen(false);
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx(FontAwesomeIcon, {
                                                icon: link.icon,
                                                style: {
                                                    marginRight: "10px"
                                                }
                                            }),
                                            link.label
                                        ]
                                    })
                                }, key))
                        })
                    })
                ]
            })
        ]
    });
};
const NavbarBrand = styled_components.div`
    position: relative;
    padding: 5px 10px;
    margin: 5px 10px;
    &::before{
        content: "";
        display: inline-block;
        width: 50px;
        height: 50px;
        background-image: url(${(p)=>p.logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        vertical-align: middle;
        margin-right: 10px;
    }

    &::after {
        content: "${(p)=>p.title}";
        font-size: 1.5rem;
        font-weight: bold;
        display: inline-block;
        vertical-align: middle;
        color: ${theme_constants_COLORS.blue};
    }
`;
import logo_namespaceObject from "./static/image/logo.png";
const Navbar = styled_components(Card)`
    
    width: calc(100% - 24px);
    min-height: 40px;
    padding: 0;
    margin: 5px;
    display: flex;
    flex-direction: column;
    gap: 0;
    font-size: clamp(12px, 1.25vw, 18px);
    background-color: ${COLORS.base};
    position: relative;

    @media (max-width: 768px) {
        width: calc(100% - 16px);
        margin: 3px;
        font-size: clamp(10px, 2vw, 14px);
    }
`;
const ItemViewContainer = styled_components.div`
    padding: 5px 10px;
    min-width: 50px;
    border-radius: 8px;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
        cursor: pointer;
        background-color: ${COLORS.baseLight};
        box-shadow: ${SHADOW.light};
    }

    &:active {
        box-shadow: ${SHADOW.insetLight};
    }

    @media (max-width: 768px) {
        padding: 12px 15px;
        font-size: 14px;
        width: 100%;
        white-space: normal;
        justify-content: center;
    }
`;
const ItemView = ({ item })=>/*#__PURE__*/ jsxs(ItemViewContainer, {
        onClick: item.onClick,
        children: [
            item.icon && /*#__PURE__*/ jsx("span", {
                className: 'icon',
                children: /*#__PURE__*/ jsx("i", {
                    className: `icon-${item.icon}`
                })
            }),
            /*#__PURE__*/ jsx("span", {
                className: 'label',
                children: item.label
            })
        ]
    }, item.id);
const ItemCollectionView = ({ collection })=>/*#__PURE__*/ jsxs("div", {
        children: [
            /*#__PURE__*/ jsx("span", {
                children: collection.label
            }),
            /*#__PURE__*/ jsx("div", {
                children: collection.items.map((subItem)=>/*#__PURE__*/ jsx(ItemView, {
                        item: subItem
                    }, subItem.id))
            })
        ]
    }, collection.label);
const ItemsContainer = styled_components.div`
    display: flex;
    gap: 5px;
    font-weight: 500;
    padding: 5px;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap: 0;
        padding: 0;
        max-height: ${(props)=>props.isOpen ? '1000px' : '0'};
        overflow: hidden;
        transition: max-height 0.4s ease-in-out;
        border-top: ${(props)=>props.isOpen ? `1px solid ${COLORS.baseBorder}` : 'none'};
    }
`;
const ProfileContainer = styled_components.div`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 5px;
    flex-direction: row;

    >.img-holder {
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 40px;
        min-height: 40px;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding: 10px 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        gap: 10px;

        >.img-holder {
            width: 40px;
            height: 40px;
        }
    }
`;
const Items = ({ items, isOpen = false })=>/*#__PURE__*/ jsx(ItemsContainer, {
        isOpen: isOpen,
        className: 'items',
        children: items.map((item)=>{
            if ('items' in item) return /*#__PURE__*/ jsx(ItemCollectionView, {
                collection: item
            }, item.label);
            return /*#__PURE__*/ jsx(ItemView, {
                item: item
            }, item.id);
        })
    });
const Profile = ({ data, isOpen })=>{
    if (false === isOpen) return;
    return /*#__PURE__*/ jsxs(ProfileContainer, {
        children: [
            /*#__PURE__*/ jsx("div", {
                className: 'img-holder',
                children: data?.avatarUrl && /*#__PURE__*/ jsx("img", {
                    src: data.avatarUrl,
                    alt: data.name
                }) || /*#__PURE__*/ jsx(Silhouette, {
                    code: 'head_1_2',
                    rounded: true,
                    size: 4
                })
            }),
            /*#__PURE__*/ jsxs("div", {
                children: [
                    data?.name,
                    /*#__PURE__*/ jsx(FontAwesomeIcon, {
                        icon: faChevronDown
                    })
                ]
            })
        ]
    });
};
const HamburgerButton = styled_components.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${COLORS.text};
    padding: 5px 10px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const NavbarTop = styled_components.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const SmallScreen = styled_components.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;
const LargeScreen = styled_components.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`;
const TopNavigation = ({ title, profileData, items = [] })=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ jsxs(Navbar, {
        children: [
            /*#__PURE__*/ jsxs(NavbarTop, {
                children: [
                    /*#__PURE__*/ jsx(NavbarBrand, {
                        title: title,
                        logo: logo_namespaceObject
                    }),
                    /*#__PURE__*/ jsxs(LargeScreen, {
                        children: [
                            /*#__PURE__*/ jsx(Items, {
                                items: items,
                                isOpen: isMenuOpen
                            }),
                            /*#__PURE__*/ jsx(Profile, {
                                data: profileData,
                                isOpen: isMenuOpen
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx(HamburgerButton, {
                        onClick: toggleMenu,
                        children: /*#__PURE__*/ jsx(FontAwesomeIcon, {
                            icon: isMenuOpen ? faTimes : faBars
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsxs(SmallScreen, {
                children: [
                    /*#__PURE__*/ jsx(Items, {
                        items: items,
                        isOpen: isMenuOpen
                    }),
                    /*#__PURE__*/ jsx(Profile, {
                        data: profileData,
                        isOpen: isMenuOpen
                    })
                ]
            })
        ]
    });
};
const DateFormatter = ({ milliseconds })=>{
    let dt = moment(milliseconds);
    return /*#__PURE__*/ jsx("span", {
        children: dt.format('DD/MM/YY hh:mmA')
    });
};
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
const Centered = styled_components.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const Background = styled_components.div`
    background: ${theme_constants_COLORS.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: ${theme_constants_TYPOGRAPHGY.font_family};
    font-weight: ${theme_constants_TYPOGRAPHGY.font_weight};
`;
const TabWrapper = styled_components.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap:15px;
    margin: 10px;
    width: calc(100% - 20px);
    .tabs {
        padding: ${sizes_SIZES.xs};
        display: flex;
        flex-wrap: wrap;
        gap:15px;
        button {
            width: 150px;
        }
    }
    .tab-content{
        padding: ${sizes_SIZES.xs};
        display: flex;
        flex-direction: column;
        gap:5px;
        overflow-y: scroll;
        flex-grow: 1;
    }
`;
const Tabs = ({ tabs, onTabChange, content }, ...rest)=>{
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
        ...rest,
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
const Version = package_namespaceObject.rE;
export { Avatar, Background, BlueOutlineButton, Buttons, COLORS, Card, Centered, confirm_button_ConfirmButton as ConfirmButton, DateFormatter, DoughnutChart, Form, H1, H4, Modal, ParsedText, PrimaryButton, PrimaryPill, RADIUS, RedOutlineButton, SHADOW, sizes_SIZES as SIZES, SecondaryButton, SecondaryPill, SideNav, Silhouette, Sprite, Switch, TYPOGRAPHGY, Tabs, Text, TextInput, TimeFormatter, TimerDoneButton, TimerPauseButton, TimerPlayButton, TopNavigation, TransparentPill, VIEWPORT, Version, WEIGHTS, ZINDEX };
