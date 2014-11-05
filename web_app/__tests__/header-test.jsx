'use strict';

jest.dontMock('../lib/components/header.jsx');

var React = require('react/addons');
var Header = require('../lib/components/header.jsx');
var TestUtils = React.addons.TestUtils;

describe('Header', function () {

  var header, callback;

  beforeEach(function () {
    callback = jest.genMockFunction();
    header = TestUtils.renderIntoDocument(
      <Header name='test' onChangeName={callback} />
    );
  });

  it('should display the app name', function () {
    var h1 = TestUtils.findRenderedDOMComponentWithTag(header, 'h1');
    expect(h1.getDOMNode().textContent).toBe('test');
  });

  it('calls onChangeName whin button is clicked', function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(header, 'button');
    TestUtils.Simulate.click(button);
    expect(callback.mock.calls.length).toBe(1);
    expect(callback.mock.calls[0]).toEqual([]);
  });

});
