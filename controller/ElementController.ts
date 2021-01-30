import DefaultElement from '../model/DefaultElement';

export default class ElementController {
    constructor(public element: DefaultElement) { }

    setColor(color: ["-primary", "-secondary", "-success", "-danger", "-warning", "-info", "-light", "-dark", "-link"]) {
        this.element.color = color;
    }

    setOutlineColor(outlineColor: ["-outline-primary", "-outline-secondary", "-outline-success", "-outline-danger", "-outline-warning", "-outline-info", "-outline-light", "-outline-dark"]) {
        this.element.outlineColor = outlineColor;
    }

    setSize(size: ["-lg", "-sm", "-block"]) {
        this.element.size = size;
    }

    setState(state: ["active", "disabled"]) {
        this.element.state = state;
    }

    setValue(value: string) {
        this.element.value = value;
    }

    setPlaceholder(placeholder: string) {
        this.element.placeholder = placeholder;
    }

    build(): string {
        return this.element.generateElement();
    }
}