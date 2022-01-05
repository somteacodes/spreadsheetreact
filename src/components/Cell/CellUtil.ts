export const onClickOutsideInputHandler =(event: MouseEvent)=>{
    if ((event.target as HTMLElement)?.dataset?.cellKey !== "2") {
        return false
        // console.log(event.target);
      } else {
        console.log("do nothing");
      }
}