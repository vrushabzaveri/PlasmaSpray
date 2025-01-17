@extends('layouts.app')
@section('content')
<!--Inner Heading start here-->
<div class="innerheading">
    <div class="container"><h1>Sitemap</h1></div>    
    </div>  
    <!--Inner Heading end here-->
        
    <!--Middle content start here-->    
    <div class="whitecontarea">
    <div class="container">
    <div class="row">
    <div class="col-md-1">
    <div class="textred16bold"><a href="#" style="color: #1a4d85;">Home</a></div>    
    </div>
    <div class="col-md-2 col-sm-4 col-xs-6">
    <div class="textred16bold">About us</div>  
    <div class="textblack14cont">    
    <ul>    
    <li><a href="{{ route('about-us') }}">Company Profile</a></li>
    <li><a href="{{ route('catalogue') }}">Catalogue</a></li>
    </ul>    
    </div>    
    </div>	
    <div class="col-md-2 col-sm-4 col-xs-6">
    <div class="textred16bold">Services</div>      
    <div class="textblack14cont">    
    <ul>    
    <li><a href="{{ route('scope') }}">Scope of Services</a></li>
    <li><a href="{{ route('range-of-products') }}">Range Of Products</a></li>
    </ul>    
    </div>    
    </div>		
    <div class="col-md-3 col-sm-4 col-xs-12 rowmargin20">
    <div class="textred16bold">Procesess</div>          
    <div class="textblack14cont">    
    <ul>
        <li><a href="{{ route('plasma-trans-arc') }}">Plasma Transferred Arc</a></li>
        <li><a href="{{ route('powder-flame-spray') }}">Powder Flame Spraying</a></li>
        <li><a href="{{ route('arc-spraying') }}">Arc Spraying</a></li>
        <li><a href="{{ route('hvofs') }}">High Velocity Oxygen Fuel Spraying</a></li>
        <li><a href="{{ route('plasma-spraying') }}">Plasma Spraying </a></li>
    </ul>    
    </div>    
    </div>	
    <div class="col-md-4 col-sm-4 col-xs-6 rowmargin20">
    <div class="textred16bold">Other</div>              
    <div class="row">
    <div class="col-xs-6">
    <div class="textblack14cont">
    <ul>
    <li><a href="{{ route('dashboards.contactus') }}">Contact us</a></li>
    <li><a href="{{ route('dashboards.enquiry') }}">Enquiry</a></li>
    <li><a href="{{ route('photo-gallery') }}">Photo Gallery</a></li>    
    </ul>        
    </div>    
    </div> 
    <div class="col-xs-6">
    <div class="textblack14cont">
    <ul>
    <li><a href="{{ route('sitemap') }}">Sitemap</a></li>
    <li><a href="{{ route('privacy-policy') }}">Privacy Policy</a></li>
    <li><a href="{{ route('terms-and-conditions') }}">Terms and Conditions</a></li>    
    </ul>        
    </div>    
    </div>    
    </div>
    </div>	
    </div>    
    </div>
    </div>
    <!--Middle content end here-->
@endsection