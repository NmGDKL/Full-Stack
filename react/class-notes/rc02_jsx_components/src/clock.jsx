function Clock() {
    const date = new Date();
  return (
    <div className='clock' style={{backgroundColor: "purple", color: "white", textAlign: "center"}}>
      <div className="clock-tarih">
          <span>{date.getDate().toString().padStart(2, 0)}</span>/ <span>{(date.getMonth()+1) .toString().padStart(2, 0)}</span> / <span>{date.getFullYear()}</span>
      </div>
      <div className="clock-saat">
          <span>{date.getHours().toString().padStart(2, 0)}</span>: <span>{date.getMinutes().toString().padStart(2, 0)}</span>: <span>{date.getSeconds().toString().padStart(2, 0)}</span>
      </div>
    </div>
  )
}

export default Clock;
