import React, { useState } from 'react';
import AceEditor from 'react-ace';

import data from './dataset.json';

const FileEdit = () => {
    // Set initial JSON data using the imported 'data'
    const initialJson = JSON.stringify(data, null, 2);
    // Use separate state for the edited JSON
    const [editedJson, setEditedJson] = useState(initialJson);

    function handleChange(newText, event) {
        setEditedJson(newText);
    }

    function handleSave() {
        try {
            const parsedJson = JSON.parse(editedJson);
            // You can perform additional validation or save the parsedJson to your backend here
            console.log(parsedJson);

        } catch (error) {
            // Handle parsing errors or other issues while saving
            console.error('Error saving JSON:', error);
        }
    }

    return (
        <div>

            <AceEditor

                onChange={handleChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: false }}
                value={editedJson}
                style={{ width: '800px', height: '800px' ,margin:"10%"}}
            ></AceEditor>
            <button onClick={handleSave}>Save JSON</button>
        </div>
    )
};

export default FileEdit;

