import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewMailForm({addMail}) {

    const [formData, setFormData] = useState('')
    const [selectedOption, setSelectedOption] = useState('')


    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addMail(formData, selectedOption);
        setFormData('');
        setSelectedOption('');
        navigate('/mailboxes');
    }

    const handleChange = ({ target }) => {
        setSelectedOption(target.value)
        setFormData({ ...formData, [target.name]: target.value })
    }

    return (
        <main>
            <h2>New Mail</h2>
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Enter a Boxholder</label>
                <input
                    type="text"
                    name='name'
                    value={formData.boxholder}
                    placeholder="Boxholder name"
                    onChange={handleChange}
                />
                <label htmlFor="size">Select a Box Size</label>
                <select name="size" id="options" value={selectedOption} onChange={handleChange}>
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