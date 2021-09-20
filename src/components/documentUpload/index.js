import { useState } from 'react'
import Card from '../ui/Card'
import {Form, Col, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import classes from './documentUpload.module.css'

const DocumentUpload = () => {
    const history = useHistory();

    const [selectedDocType, setSelectedDocType] = useState({
        docTypeId: '',
        docType: ''
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [documents, setDocuments] = useState([]);

    const docTypes = {
        0 : 'Bond Purchase Contract',
        1 : 'Bond Specimen',
        2 : 'CAFR',
        3 : 'Indenture'
    }

    const handleChange = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let value = e.nativeEvent.target[index].value;
        let label = e.nativeEvent.target[index].text;
        setSelectedDocType({
            docTypeId: value,
            docType: label
        });
    }

    const onChangeHandler = (event) => {
        if(event.target.files[0].size > 15000000) {

        } else {
            let docs;
            let documentIndex = documents.findIndex(function(doc) { 
                return doc.documentType.docTypeId == selectedDocType.docTypeId; 
            });

            if( documentIndex >= 0) {
                docs = [...documents];
                docs[documentIndex] = {...docs[documentIndex],
                    document: event.target.files[0]
                };
            } else {
                docs = [...documents, {
                    documentType: selectedDocType,
                    document: event.target.files[0]
                }];
            }
            setDocuments(docs);

        }

        // documents.filter(item => item.documentType.docTypeId == selectedDocType.docTypeId).forEach(doc => {
        //     console.log("iiii", doc);
        // });
        // const docs = [...documents, {
        //     documentType: selectedDocType,
        //     document: event.target.files[0]
        // }];
    }

    const validateForm = (e) => {
        history.push("/dashboard/report-proposed-sale/review")
    }

    return (
        <Card>
            <div className="form">
            <h1>Document(s) Upload</h1>

            <div>
                <i>
                    <ul  className={classes.docrequirements}>
                        <li>(1) Only pdf documents are accepted</li>
                        <li>(2) You must select "DOCUMENT TYPE" from the document type list</li>
                        <li>(3) Only one document can be uploaded for each document type</li>
                        <li>(4) Uploading document for the same document type will overwrite previously uploaded document for that type</li>
                        <li>(5) Maximum file size for each socuent is 15 MB. If your document is larger than 15 MB, please contact CDIAC</li>
                        <li>(6) Please ensure that all sensitive//confidential information is redacted</li>
                    </ul>
                </i>
            </div>

            <div className="mb-20">
                <label className="mb-10">Document Type</label>

                <Col md={3}>
                <Form.Select onChange={(e)=>handleChange(e)} defaultValue={selectedDocType.docTypeId}>
                        <option>select</option>
                        
                        {(Object.keys(docTypes).length !== 0) && Object.entries(docTypes).map(([key, val]) =>{
                            return (<option key={key} value={key}>{val}</option>);
                        }
                        ) }
                </Form.Select>
                </Col>
            </div>

            <div className="mb-20">
                <label className="mb-10">Choose a document to upload (DO NOT UPLOAD CHECKS OR INVOICES)</label>
                <div>
                <input type="file" name="file" accept="application/pdf" onChange={(e)=>onChangeHandler(e)}/>
                </div>
            </div>  

            <div className="mb-20">
                <label className="mb-10">Documents Already Uploaded</label>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Document Type</th>
                            <th>Document Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents && documents.map((doc, i) => {
                        return( <tr key={i}>
                            <td>{doc.documentType.docType}</td>
                            <td>{doc.document.name}</td>
                            <td></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div> 

            <div className="btn-div">
            <Link to="/dashboard/report-proposed-sale/purpose-of-financing"><Button>Back</Button></Link>
            <Button className="fright" type="button" onClick={()=>validateForm()}>Next</Button>
            </div>

            </div>
        </Card>
    )
}

export default DocumentUpload
