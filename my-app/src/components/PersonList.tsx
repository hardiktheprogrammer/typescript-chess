type PersonListProps = {
    name: {

        first: string
        last: string
    }[]

}
export const PersonList = (props: PersonListProps) => {
    
    return (
        <div>
            {props.name.map((name) => {
                return (
                    <h1 key={name.first}> { name.last}</h1>
                )
            })}

</div>
    )
}
