type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    
    return (

        <div>

            <h2>
                {
                    props.isLoggedIn ? `  Welcome Hardik ${props.name} send your Child  ${props.messageCount}Predictor ` : 'welcome Preditor' 
            
                }
            
            </h2>
        </div>
    )
}
