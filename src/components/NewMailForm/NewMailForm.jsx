import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled, {ThemeProvider, createGlobalStyle}from "styled-components"

const theme = {
    colors: {
        primary: '#004B87',     //Blue
        secondary: '#DA291C',   //Red
        background: '#fff5f5',  // Cream White
        text: '#663300',
        hover: ' #ffc2d1',
    },
    borderRadius: '12px',
    maxWidth: '800px',
    shadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
}

//Global Styles
const Globalstyle = createGlobalStyle`
    body {
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text}
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    }

    h2 {
    color: ${({theme}) => theme.colors.primary};
    text-align: center;
    }
`;

const Card = styled.form`

padding: 20px;
max-width: 400px;
margin: 20px auto;
background-color: #fff;
border-radius: ${({theme}) => theme.borderRadius};
box-shadow: ${({theme}) => theme.shadow}
text-align: center;
`;
const Input = styled.input`
    padding: 10px;
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.borderRadius};
    width: 100%;
    max-width: 375px;
    margin: 10px auto;

    &::placeholder {
    color: ${({theme}) => theme.colors.hover}
    }
`;
const Select = styled.select`
    padding: 10px;
    border: 2px solid ${({theme}) => theme.colors.primary};
    border-radius: ${({theme}) => theme.borderRadius};
    width: 100%;
    max-width: 400px;
    margin: 10px auto;
`;

const Badge = styled.button`
    padding: 10px;
    background-color: ${({theme}) => theme.colors.primary};
    box-shadow: ${({theme}) => theme.shadow};
    border: none;
    width: 100%;
    max-width: 400px;
    margin: 10px auto;
    border-radius: ${({theme}) => theme.borderRadius};
    font-weight: bold;
    color: white;

`

const initialState ={
    boxholder: '',
    size: ''
}
function NewMailForm({addMail}) {

    const [formData, setFormData] = useState(initialState)
   


    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.boxholder || !formData.size) {
            alert('Please fill in all fields.')
        }
        console.log('submitting Mial:', formData)

        addMail(formData);
        setFormData(initialState);
    
        navigate('/mailboxes');
    }

    const handleChange = ({ target }) => {
       
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <ThemeProvider theme={theme}>
            <Globalstyle />
            <h2>New Mail</h2>
            <Card onSubmit={handleSubmit} >
                <label htmlFor="name">Enter a Boxholder: </label>
                <Input
                    type="text"
                    name='boxholder'
                    value={formData.boxholder}
                    placeholder="Boxholder name"
                    onChange={handleChange}
                />
                <label htmlFor="size">Select Box Size:</label> 
                <Select name="size" id="options" value={formData.size}  onChange={handleChange}>
                    <option value="" >Select an option</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </Select>
                <Badge type="submit">Submit</Badge>
            </Card>
        </ThemeProvider>
    )
}

export default NewMailForm