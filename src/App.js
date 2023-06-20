import React from 'react';
import './App.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends React.Component {
render() {
return (
<div className="maincontainer">
<section>
<div class="container py-5">
<header class="text-center mb-5 text-white">
<div class="row">
<div class="col-lg-8 mx-auto">
<h1>Reactjs Bootstrap pricing table</h1>
<p>Pricing Table With Custom Hover Effects and Buttons<br /> </p>
</div>
</div>
</header>
<div class="row text-center align-items-end">
<div class="col-lg-4 mb-5 mb-lg-0">
<div class="bg-white p-5 rounded-lg shadow">
<h1 class="h6 text-uppercase font-weight-bold mb-4">FREE</h1>
<h2 class="h1 font-weight-bold">$0<span class="text-small font-weight-normal ml-2">/ month</span></h2>
<div class="custom-separator my-4 mx-auto bg-primary"></div>
<ul class="list-unstyled my-5 text-small text-left">
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> single User</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> 5GB storage</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
<li class="mb-3">  
<i class="fa fa-times mr-2"></i>
<i>Unlimited Private Projects</i>
</li>
<li class="mb-3 text-muted">
<i class="fa fa-times mr-2"></i>
<i>Dedicated phone support</i>
</li>
<li class="mb-3 text-muted">
<i class="fa fa-times mr-2"></i>
<i>Free subdomain</i>
</li>
<li class="mb-3 text-muted">
<i class="fa fa-times mr-2"></i>
<i>Monthly status reports</i>
</li>
</ul>
<a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">BUTTON</a>
</div>
</div>
<div class="col-lg-4 mb-5 mb-lg-0">
<div class="bg-white p-5 rounded-lg shadow">
<h1 class="h6 text-uppercase font-weight-bold mb-4">PLUS</h1>
<h2 class="h1 font-weight-bold">$9<span class="text-small font-weight-normal ml-2">/ month</span></h2>
<div class="custom-separator my-4 mx-auto bg-primary"></div>
<ul class="list-unstyled my-5 text-small text-left font-weight-normal">
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> 5 Users</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> 50GB Stroage</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Unlimited Private projects </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Dedicated Phone Support </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Free subdomain </li>
<li class="mb-3">
<i class="fa fa-times mr-2"></i>
<i>Monthly Status Reports</i>
</li>
</ul>
<a href="#" class = "btn btn-primary btn-block p-2 shadow rounded-pill">BUTTON</a>
</div>
</div>
<div class="col-lg-4">
<div class="bg-white p-5 rounded-lg shadow">
<h1 class="h6 text-uppercase font-weight-bold mb-4">PRO</h1>
<h2 class="h1 font-weight-bold">$49<span class="text-small font-weight-normal ml-2">/ month</span></h2>
<div class="custom-separator my-4 mx-auto bg-primary"></div>
<ul class="list-unstyled my-5 text-small text-left font-weight-normal">
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Unlimited Users </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>150GB Storage </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Unlimited Public Projects </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Unlimited Private Projects </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Dedicated Phone support </li>
<li class="mb-3">
<i class="fa fa-check mr-2 text-primary"></i>Unlimited Free Subdomains </li>
<li class="mb-3"></li>
<i class="fa fa-check mr-2 text-primary"></i>Monthly status Reports 
<li class="mb-3"></li>
</ul>
<a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">BUTTON</a>
</div>
</div>
</div>
</div>
</section>
</div>
)
};
}
export default Home;
