import React, { Component } from 'react'

class ErrorBoundary extends React.Component {
  
  constructor(props){ 
    super(props);
    this.state = { hasError: false }
  }

  // Ye lifecycle method tab call hota hai jab koi error aata hai
  static getDerivedStateFromError(){
    return { hasError: true }  
  }


  // Optional: Error log karene ke liye
  componentDidCatch(error, info){
    console.log("Error caught by ErrorBoundary : ", error, info); 
  }


  render () {
    
    if (this.state.hasError) {
      return (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-red-500">Something went wrong 😢</h2>
          <p className="mt-2">Please refresh the page or try again later.</p>
        </div>
      )
    }

    return this.props.children;

  }

}

export default ErrorBoundary