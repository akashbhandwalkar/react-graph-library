import React from 'react';

class Header extends React.Component {
    collapseMenu = () => {
        var dom = document.getElementById('megamenu-dropdown');
        if(dom.classList.contains('collapse')) {
            dom.classList.remove('collapse');
        } else {
            dom.classList.add('collapse')
        }
    }

    render() {
        return(<div data-component="navbar">

        <nav className="navbar p-0 fixed-top">
              <button onClick={this.collapseMenu} className="navbar-toggler collapse navbar-toggler-left rounded-0 border-0" type="button" data-toggle="collapse" data-target="#megamenu-dropdown" aria-controls="megamenu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i><span className="ml-3">Advanced</span>
              </button>
          
          <div><a className="navbar-brand px-1" href="#">
            {/* <img src="http://kris.agentfire2.com/wp-content/mu-plugins/agentfire-shared-library/img/agentfire.svg" className="d-inline-block mt-1" alt="AgentFire Logo" height="40" /> */}
            </a>

          <div className="right-links float-right mr-4">
            <a href="#" className="home"><i className="fa fa-home mr-3"></i></a>
            
            <div className="d-inline dropdown rounded-0 mx-3">
              <a className="dropdown-toggle" id="tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-wrench" aria-hidden="true"></i></a>
              <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="tools">
                <a className="dropdown-item px-2" href="#">Recompile CSS</a>
              </div>
            </div> 
            {/* <!-- /.dropdown --> */}
            
            <div className="d-inline dropdown mr-3">
              <a className="dropdown-toggle" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span>10</span><i className="fa fa-bell"></i></a>
              <div className="dropdown-menu dropdown-menu-right rounded-0 pt-0" aria-labelledby="notifications">
                <div className="list-group">
                  <div className="lg">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
              <h5 className="mb-1">Real Estate Marketing Automation: 6 Simple Systems</h5>
              <p className="mb-0">17 October 2016 | 9:32 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How to Generate Seller Leads For $0.88 Using...</h5>
              <p className="mb-0">3 October 2016 | 9:58 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">AgentFire Re-Opens For Business. New Services,...</h5>
              <p className="mb-0">20 September 2016 | 6:28 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">Real Estate Blogging 101: How To Get Better...</h5>
              <p className="mb-0">7 September 2016 | 3:03 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How To Get More Listings With Strategic...</h5>
              <p className="mb-0">16 August 2016 | 8:26 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How To Find Strategic Real Estate Partners as...</h5>
              <p className="mb-0">9 August 2016 | 6:44 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">Top 10 Real Estate Marketing Tools</h5>
              <p className="mb-0">2 August 2016 | 10:25 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">The Beginner Guide To Google Adwords For Real...</h5>
              <p className="mb-0">27 July 2016 | 1:15 am</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">The Complete Guide To Hyper-Local SEO For Realtors</h5>
              <p className="mb-0">19 July 2016 | 5:51 pm</p>
            </a>
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
              <h5 className="mb-1">How We Took Ed Eakin’s Real Estate Website...</h5>
              <p className="mb-0">11 July 2016 | 6:19 pm</p>
            </a>
          </div> 
          {/* <!-- /.lg --> */}
        </div> 
        {/* <!-- /.list group --> */}
      </div> 
      {/* <!-- /.dropdown-menu --> */}
    </div> 
    {/* <!-- /.dropdown --> */}
    
    <div className="d-inline dropdown mr-3">
      <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><i className="fa fa-envelope"></i></a>
      <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="messages">
        <a className="dropdown-item">There are no new messages</a>
      </div> 
      {/* <!-- /.dropdown-menu --> */}
  </div> 
  {/* <!-- /.dropdown --> */}
    
    
    <div className="d-inline dropdown">
      <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
        <img src="http://1.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g" />
      </a>
      <div className="dropdown-menu dropdown-menu-right rounded-0" aria-labelledby="messages">
        <a className="dropdown-item" href="#">Edit my profile</a>
        <a className="dropdown-item" href="#">Log Out</a>
      </div> 
      {/* <!-- /.dropdown-menu --> */}
    </div> 
    {/* <!-- /.dropdown --> */}
    
  </div> 
  {/* <!-- /.right-links --> */}
  
  </div>
  

  <div className="megamenu">
        <div className="collapse navbar-collapse" id="megamenu-dropdown">
        <div className="megamenu-links">
      <div className="row">
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuOne" aria-expanded="false" aria-controls="collapseExample" id="more">Slider Revolution
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> { /*<!-- button close --> */}
          <div className="collapse" id="menuOne">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Slider Revolution</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Navigation Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add-Ons</a>
            </div> 
            {/* <!-- /.list-group --> */}
          </div>
          {/* <!-- /.collapse --> */}
        </div> 
        {/* <!-- /.col-md-3 --> */}
        
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuTwo" aria-expanded="false" aria-controls="collapseExample" id="more">Flyouts
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          {/* <!-- button close --> */}
          <div className="collapse" id="menuTwo">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">All Flyouts</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Add new Flyout</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Re-Order</a>
            </div> 
            {/* <!-- /.list-group --> */}
          </div>
          {/* <!-- /.collapse --> */}
        </div> 
        {/* <!-- /.col-md-3 --> */}
        <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuThree" aria-expanded="false" aria-controls="collapseExample" id="more">Cornerstone 
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          {/* <!-- button close --> */}
          <div className="collapse" id="menuThree">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Cornerstone</a>
            </div> 
            {/* <!-- /.list-group --> */}
          </div>
          {/* <!-- /.collapse --> */}
        </div> 
        {/* <!-- /.col-md-3 --> */}
      </div> 
      {/* <!-- /.row --> */}
          <div className="row">
            <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3 pl-5" data-toggle="collapse" href="#menuFour" aria-expanded="false" aria-controls="collapseExample" id="more">Ess. Grid
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          {/* <!-- button close --> */}
          <div className="collapse" id="menuFour">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
            </div> 
            {/* <!-- /.list-group --> */}
          </div>
          {/* <!-- /.collapse --> */}
        </div> 
        {/* <!-- /.col-md-3 --> */}
            <div className="col-md-3 px-0">
          <a className="btn rounded-0 border-0 d-flex w-100 justify-content-between p-3" data-toggle="collapse" href="#menuFive" aria-expanded="false" aria-controls="collapseExample" id="more">AgentFire CTA Plus
            <i className="fa fa-minus float-right" aria-hidden="true"></i>
            <i className="fa fa-plus float-right" aria-hidden="true"></i>
          </a> 
          {/* <!-- button close --> */}
          <div className="collapse" id="menuFive">
            <div className="list-group border-0">
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Essential Grid</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Item Skin Editor</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Meta Data Handling</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Search Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Global Settings</a>
              <a href="#" className="list-group-item list-group-item-action border-0 pl-4 py-3">Import/Export</a>
            </div> 
            {/* <!-- /.list-group --> */}
          </div>
          {/* <!-- /.collapse --> */}
        </div> 
        {/* <!-- /.col-md-3 --> */}
          </div>
    </div> 
    {/* <!-- /.megamenu-links --> */}
      </div></div>
</nav>
</div> )
    }
}

export default Header;