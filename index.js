function takeANumber (katzDeliLine, name) {
  var inLine = katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${inLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nextCustomer = katzDeliLine.shift()
    return `Currently serving ${nextCustomer}.`
  }
  return 'There is nobody waiting to be served!'
}
