
function Radiobuttons(props) {
    const listTask = [{
        task: "Clean up bedroom"
    },
    {
        task: "Buy some milk"
    },
    {
        task: "Jogging"
    },
    {
        task: "Learn React"
    },
    {
        task: "Doing exercises"
    },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-1-6">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optradio" /> {props.task}
                            {/* {listTask.map((job,index) => 
                                <input key={index} type="radio" className="form-check-input" name="optradio"/>)} */}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Radiobuttons;