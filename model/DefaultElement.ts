export default abstract class DefaultElement {
    mainElement: string;
    color: ["-primary", "-secondary", "-success", "-danger", "-warning", "-info", "-light", "-dark", "-link"];
    outlineColor: ["-outline-primary", "-outline-secondary", "-outline-success", "-outline-danger", "-outline-warning", "-outline-info", "-outline-light", "-outline-dark"];
    size: ["-lg", "-sm", "-block"];
    state: ["active", "disabled"];
    value: string;
    placeholder: string;

    generateElement(): string {
        return `<${this.mainElement} class='${[this.color, this.outlineColor, this.size, this.state].join(' ')} placeholder='${this.placeholder}'' value='${this.value}'></${this.mainElement}>`
    }
}