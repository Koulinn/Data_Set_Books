function FooterColumn({title1, title2}) {
    return (
        <div className="col d-flex flex-column align-items-center justify-content-center">
            <h4 className="my-2">{title1}</h4>
            <h4 className="my-2">{title2}</h4>
        </div>
    )
}

export default FooterColumn
