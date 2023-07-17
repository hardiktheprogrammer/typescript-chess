type GreetProps = {
    name: string
    messageCount:number
}

export const Greet = (props: GreetProps) => {
    return (

        <div>

            <h1>
                Welcome Hardik {props.name} send your Child  { props.messageCount}Predictor 
            </h1>
        </div>
    )
}
