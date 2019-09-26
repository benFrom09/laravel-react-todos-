import React from 'react'

export default function Modal(props) {

   if(!props.show){
       return null;
   }
   const style={
       display:"block",
       background:"#000000b5"

   }
   return (
        <div style={style} className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <i onClick={props.close} className="fas fa-times" title="close" style={{cursor:"pointer",color:"#E91E63"}}/>
                    </div>
                    <div className="modal-body">
                        {props.content ? props.content : "Ceci est un exemple"}
                    </div>
                    <div className="modal-footer">
                        {props.btn?props.btn:""}
                    </div>
                </div>
            </div>
        </div>
   );

}
