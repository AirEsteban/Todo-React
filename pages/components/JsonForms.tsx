import { UISchemaElement } from "@jsonforms/core";
import { materialCells, materialRenderers } from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import { Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

const Json = () => {
    const [data, setData] = useState({});
    
    const jsonSchema = {
        "type": "object",
        "properties": {
            "prop.name": {
                "type": "string",
                "title": "First Name"
            },
            "prop.lastName":{
                "type": "string"
            },
            "lastLastName":{
                "type": "string"
            }
        },
        "algo": {
            "date":{
                "type": "string"
            },
            "algo.name":{
                "type": "string"
            }
        },
        "required":[
            "prop.lastName",
            "date"
        ]
    };

    const uiSchema = {
        "type": "Group",
        "label": "My Group",
        "elements": [
            {
                "type": "HorizontalLayout",
                "elements": [
                    {
                        "type": "Control",
                        "scope": "#/properties/prop.name",
                    },
                    {
                        "type": "Control",
                        "scope": "#/properties/prop.lastName",
                        "label": "Last Name"
                    },
                    {
                        "type": "Control",
                        "scope": "#/properties/lastLastName",
                    }
                ]
            },
            {
                "type": "VerticalLayout",
                "elements": [
                    {
                        "type": "Control",
                        "scope": "#/algo/date",
                        "label": "fecha",
                        "options": {
                            "format": "date",
                            "okLabel": "Do it",
                            "dateFormat": "YYYY.MM",
                            "dateSaveFormat": "YYYY-MM"
                          }
                    },
                    {
                        "type": "Control",
                        "scope": "#/algo/algo.name",
                    }
                ]
            }
        ]
        
    };
    
    const handleSend = () => {
        console.log("The form submit data", data);
    }

    return(
    <Fragment>
        <JsonForms
        schema={jsonSchema}
        uischema={uiSchema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)} />
        <Button variant="contained" onClick={handleSend}>Send</Button>
    </Fragment>);

}

export default Json;