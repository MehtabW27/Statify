const Child1 = ({testClick}) => {
  return (
   <span >
    <button style={{color: 'white'}} onClick={testClick} >
      <i class="fa-solid fa-chevron-left p-6 text-3xl" >?
      </i>
    </button>
  </span>         
   );
}
export default Child1;