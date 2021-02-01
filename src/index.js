// Div's para serem preenchidas
const selectedComponentContainer = document.getElementById('selected-component');
const componentCodeContainer = document.getElementById('component-code');

// Cores disponíveis em dropdown para botão
const colors = [
    ['btn-primary', 'Primary'],
    ['btn-secondary', 'Secondary'],
    ['btn-success', 'Success'],
    ['btn-danger', 'Danger'],
    ['btn-warning', 'Warning'],
    ['btn-info', 'Info'],
    ['btn-light', 'Light'],
    ['btn-dark', 'Dark'],
    ['btn-link', 'Link'],
];

const sizes = [
    ['btn-sm', 'Small'],
    ['btn-md', 'Medium'],
    ['btn-lg', 'Large']
];

// let selectedComponent = null;
let selectedComponent = 'Button';

// Configurações "salvas" do usuário
let userSettings = {
    value: 'Button',
    color: 'btn-primary',
    size: 'btn-md'
}

updateSelectedComponentContainer();

//------ FUNÇÕES ------//

// Função para habilitar/desabilitar atributo de um componente
function toggleClassAttribute(component, attribute) {
    component.classList.toggle(attribute);
}

// Atualizar os containers após seleção de componente
function change(e) {
    selectedComponent = selectedComponent != e.innerHTML ? e.innerHTML : null;
    updateComponentListContainer();
    updateSelectedComponentContainer();
}

function updateOperation(fn) {
    fn();
    updateSelectedComponentContainer();
}

// Atualizar valor de componente e o container
function updateValue(e) {
    updateOperation(() => userSettings.value = e.value);
}

// Atualizar cor de componente e o container
function updateColor(e) {
    updateOperation(() => userSettings.color = e.value);
}

// Atualizar cor de componente e o container
function updateSize(e) {
    updateOperation(() => userSettings.size = e.value);
}

// Atualizar a div contendo os atributos do componente selecionado e o container
function updateSelectedComponentContainer() {
    let template = '';

    if (selectedComponent)
        template = `
    <div class="container">
        <div class="card">
            <h3 class="card-header text-center">Start customizing your ${selectedComponent.toLowerCase()}</h3>

            <div class="card-body text-center alert-dark">
                <${selectedComponent.toLowerCase()} id="generatedComponent" class='btn ${userSettings.color} ${userSettings.size}'>${userSettings.value}</${selectedComponent.toLowerCase()}>
            </div>

            <div class="card-footer">
                <form>
                    <div class="form-group">
                        <label for="componentValue">${selectedComponent} text</label>
                        <input type="text" autocomplete="off" class="form-control" id="componentValue" placeholder="Enter value" onchange="updateValue(this)" value="${userSettings.value}">
                    </div>

                    <div class="form-group">
                        <label for="componentColor">Color</label>
                        <select class="form-control" id="componentColor" onchange="updateColor(this)" value="${userSettings.color}">
                            <option value="" disabled selected hidden>Select a color</option>
                            ${colors.map(c => {
            return `<option value="${c[0]}" ${userSettings.color === c[0] ? 'selected' : ''}>${c[1]}</option>`;
        })}
                        </select>
                    </div>
                    
                    <label for="componentSize">Size</label>
                    <div class="form-group">                    
                        <div class="btn-group btn-group-toggle">
                            ${sizes.map(c => {
            return `<label class="btn btn-primary ${c[0] === userSettings.size ? 'active' : ''}"><input type="radio" name="options" id="option1" autocomplete="off" value="${c[0]}" onclick="updateSize(this)">${c[1]}</label>`;
        }).toString().replaceAll(',', '')}
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>`;

    selectedComponentContainer.innerHTML = template;
    updateComponentCodeContainer();
}

// Atualizar o container contendo o código do botão gerado pelo usuário
function updateComponentCodeContainer() {
    const userComponent = document.getElementById('generatedComponent');

    componentCodeContainer.innerHTML = userComponent.outerHTML.split('')
        .map(c => {
            if (c == '<') return '&#60'
            if (c == '>') return '&#62'
            return c
        }).join('').replace('id="generatedComponent"', '');
}

// Copiar texto para clipboard e mostrar mensagem de sucesso
function copyTextToClipboard() {
    const userComponent = document.getElementById('generatedComponent').outerHTML.replace('id="generatedComponent"', '');
    const successText = document.getElementById('copy-success-text');

    successText.classList.remove('invisible');
    
    setTimeout(() => {
        successText.classList.add('invisible');
    }, 2500);

    navigator.clipboard.writeText(userComponent);
}