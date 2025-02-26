import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
        <main>
            <h2>New Mail</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Enter a Boxholder</label>
                <input
                    type="text"
                    name='boxholder'
                    value={formData.boxholder}
                    placeholder="Boxholder name"
                    onChange={handleChange}
                />
                <label htmlFor="size">Select a Box Size</label>
                <select name="size" id="options" value={formData.size} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewMailForm