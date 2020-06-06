import React, { Component } from 'react';
import './style.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        fontSize:12
    }
  }
  setStyle(){
    return {
      fontSize: this.state.fontSize,
      color: this.state.color
    }
  }
  increase(value){
    if(this.state.fontSize+value>=8 && this.state.fontSize+value<=36){
      this.setState({
        fontSize: this.state.fontSize+value
      });
    }
  }
  ChangeRed(){
    var Text=document.getElementById('p'); 
    Text.style.color='red';
  }
  ChangeBlue(){
    var Text=document.getElementById('p'); 
    Text.style.color='blue';
  }
  ChangeGrey(){
    var Text=document.getElementById('p'); 
    Text.style.color='#A9A9A9';
  }
  ChangeViolet(){
    var Text=document.getElementById('p'); 
    Text.style.color='#8D38C9';
  }
  Reset(){
    var Text=document.getElementById('p'); 
    Text.style.color='black'
    this.setState({
      fontSize: 12,
    })
  }
render (){  
  
  return(
      
    <div>
      
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="panel panel-default">
        <div className="panel-body">
           <div className='red' onClick={this.ChangeRed}></div>
           <div className='blue' onClick={this.ChangeBlue}></div>
           <div className='grey' onClick={this.ChangeGrey}></div>
           <div className='violet' onClick={this.ChangeViolet}></div>
        </div>
      </div>
      </div>
      
      <div className="row-size">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          
          <div className="panel panel-danger">
              <div className="panel-heading">
              <h3 className="panel-title">Size: {this.state.fontSize}px</h3>
              </div>
              <div className="panel-body">
                <button type="button" className="btn btn-success" onClick={()=>this.increase(+2)}>Tăng</button>
                <button type="button" className="btn btn-success"onClick={()=>this.increase(-2)}>Giảm</button>
              </div>
          </div>
          
        </div>
      </div>
      
      <button type="button" className="btn btn-warning" onClick={()=>this.Reset()}>Reset</button>
      </div>
      <div className='text'>
        <span id='p' style={this.setStyle()}>Đây là Nguyễn Hữu Hạnh đẹp trai nhất thế giới</span>
      </div>
    </div>
  );
}
}
export default App;
