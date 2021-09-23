//import { useState } from 'react'
import Card from '../ui/Card'
import { Button} from 'react-bootstrap'
//import { useHistory} from 'react-router-dom'
import classes from '../documentUpload/documentUpload.module.css'

const DocUpload = (props) => {
    //const history = useHistory();

    // const [selectedDocType, setSelectedDocType] = useState({
    //     docTypeId: '',
    //     docType: ''
    // });
    //const [selectedFile, setSelectedFile] = useState(null);
    //const [documents, setDocuments] = useState([]);

    // const handleChange = (e) => {
    //     let index = e.nativeEvent.target.selectedIndex;
    //     let value = e.nativeEvent.target[index].value;
    //     let label = e.nativeEvent.target[index].text;
    //     setSelectedDocType({
    //         docTypeId: value,
    //         docType: label
    //     });
    // }

    const onChangeHandler = (event) => {
        if(event.target.files[0].size > 100000000) {

        } else {
            // let docs;
            // let documentIndex = documents.findIndex(function(doc) { 
            //     return doc.documentType.docTypeId === selectedDocType.docTypeId; 
            // });

            // if( documentIndex >= 0) {
            //     docs = [...documents];
            //     docs[documentIndex] = {...docs[documentIndex],
            //         document: event.target.files[0]
            //     };
            // } else {
            //     docs = [...documents, {
            //         documentType: selectedDocType,
            //         document: event.target.files[0]
            //     }];
            // }
            // setDocuments(docs);

        }

    }

    const validateForm = () => {
        props.openWidget('foreclosure');
    }

    return (
        <Card>
            <div className="form">
            <h1>Document Upload</h1>

            <div>
                <i>
                    <ul  className={classes.docrequirements}>
                        <li>(1) You Must Upload the current tax roll delinquent parcel detail report that states the number of parcecls that are delinquent with respect to their special tax payments.
                            The amount that each parcel is delinquent, the total amount of special taxes due on the delinquent parcels, the length of time that each has been delinquent before submitting the Mello Roos YFSR.
                        </li>
                        <li>(2) Only PDF documents are accepted.</li>
                        <li>(3) Maximum file size for each document is 100 MB. If your document is larger than 100 MB, please contact CDIAC</li>
                        <li>(4) Please ensure that all sensitive/confidential information is redacted</li>
                        <li>(5) Do not Upload Checks or Invoices</li>
                    </ul>
                </i>
            </div>

            <div className="mb-20">
                <label className="mb-10">Choose a document to upload</label>
                <div>
                <input type="file" name="file" accept="application/pdf" onChange={(e)=>onChangeHandler(e)}/>
                </div>
            </div>  

            

            <div className="btn-div">
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>

            </div>
        </Card>
    )
}

export default DocUpload
