import React from 'react'

export default function Footer() {
    return (

<div className="footer bg-white py-4 d-flex flex-lg-column" id="kt_footer">
  {/*begin::Container*/}
  <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
    {/*begin::Copyright*/}
    <div className="text-dark order-2 order-md-1">
      <span className="text-muted font-weight-bold mr-2">2021©</span>
      <a href="#" target="_blank" className="text-dark-75 text-hover-primary">Chinikiguard</a>
    </div>
    {/*end::Copyright*/}
    {/*begin::Nav*/}
    <div className="nav nav-dark order-1 order-md-2">
      <a href="#" target="_blank" className="nav-link pr-3 pl-0">About</a>
      <a href="#" target="_blank" className="nav-link px-3">Team</a>
      <a href="#" target="_blank" className="nav-link pl-3 pr-0">Contact</a>
    </div>
    {/*end::Nav*/}
  </div>
  {/*end::Container*/}
</div>

    )
}