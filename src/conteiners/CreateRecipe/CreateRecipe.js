import React, { Component } from "react";
import Input from "../../components/UI/Input/Input"
import Button from "../../components/UI/Button/Button"
import Axios from "../../axios-orders"
import "./CreateRecipe.css"

class CreateRecipe extends Component {
    state = {
        createRecipeForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Име'
                },
                value: '',
            },
            numOfPeople: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Брой порции',
                },
                value: "",
            },
            cookTime: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Време за готвене',
                },
                value: "",
            }
        }
    }

    inputOnChangeHandler = (event, inputID) => {
        const updatedForm = { ...this.state.createRecipeForm }
        const updatedFormElement = { ...updatedForm[inputID] }
        updatedFormElement.value = event.target.value;

        updatedForm[inputID] = updatedFormElement;
        this.setState({ createRecipeForm: updatedForm })
    }

    createRecipeHandler = (e) => {
        e.preventDefault()
        const recipe = {
            recipeName: this.state.createRecipeForm.name.value,
            portions: this.state.createRecipeForm.numOfPeople.value,
            cookTime: this.state.createRecipeForm.cookTime.value
        }
        Axios.post('/recipes.json', recipe)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {

        let formElements = [];
        for (const key in this.state.createRecipeForm) {
            formElements.push({
                id: key,
                setup: this.state.createRecipeForm[key],
            })
        }

        return (
            <form className="CreateRecipe">
                {formElements.map(element => (
                    <Input
                        key={element.id}
                        elementType={element.setup.elementType}
                        elementConfig={element.setup.elementConfig}
                        value={element.setup.value}
                        onChange={(event) => this.inputOnChangeHandler(event, element.id)}
                    />
                ))}
                <Button
                    btnType="Success"
                    onClick={this.createRecipeHandler}>
                    Създай рецепта
                </Button>


            </form>
        )
    }
}

export default CreateRecipe;