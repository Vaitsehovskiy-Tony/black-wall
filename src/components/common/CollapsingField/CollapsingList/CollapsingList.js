export const CollapsingList = ({list}) => {
    console.log(list)
  return (
    list.map((i) =>
    <p className="collapsing__text collapsing__text_dots">{i}</p>)
  )
}
