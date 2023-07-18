type HeadingProps = {
    childern: string


}

export const Heading = (props: HeadingProps) => {

    return (
        <h2>
           {props.childern}
        </h2>
    )
}
