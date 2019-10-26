import React, { Component } from 'react'
import './cover.css'

class Cover extends Component {
  state = {}

  nameHandler = event => {
    console.log({ type: 'nameHandler', value: event.target.value })
  }

  emailHandler = event => {
    console.log({ type: 'emailHandler', value: event.target.value })
  }

  handleSubmit = event => {
    console.log({ type: 'handleSubmit', value: event.target.value })
  }

  render() {
    return (
      <section className='container-fuild' id='cover'>
        <div className='container'>
          <div className='col-sm-10 col-sm-offset-1'>
            <h1 className='text-center text-justify text-info bg-dark'>Welcome to dev tools</h1>
            <p className='text-center text-justify text-light'>
              Dolor aute nostrud officia occaecat eiusmod deserunt dolore deserunt. Ullamco laboris
              commodo tempor ullamco incididunt eiusmod in ex exercitation cupidatat irure et anim.
              Cillum aliquip est est irure ex esse dolore reprehenderit cillum consequat in laboris.
              Est commodo cillum enim labore ipsum excepteur. Anim minim et id dolor.
            </p>

            <form action='' className='form-inline'>
              <div className='form-group'>
                <label className='sr-only'>Name</label>
                <input
                  type='text'
                  onBlur={this.nameHandler}
                  className='form-control form-control-lg'
                  placeholder='Jane dow'
                />
              </div>
              <div className='form-group'>
                <label className='sr-only'>Email</label>
                <input
                  type='text'
                  onBlur={this.emailHandler}
                  className='form-control form-control-lg'
                  placeholder='jane.dow@abc.com'
                />
              </div>
              <button
                type='button'
                onClick={this.handleSubmit}
                className='form-group btn btn-success btn-lg'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Cover
