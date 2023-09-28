/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  const newObj = {}
  for (key in obj) {
    newObj[key] = obj[key].trim()
  }
  return newObj
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  for (key in obj) {
    obj[key] = obj[key].trim()
  }
  return obj
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  let largest = 0
  for (let i = 0; i < integers.length; i++) {
    for (key in integers[i]) {
      if(integers[i][key] > largest) {
        largest = integers[i][key]
      }
    }
  }
  return largest
}


class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    this.currentCount = initialNumber
    this.countDownFlag = false
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    if (this.countDownFlag === false) {
      this.countDownFlag = true
      return this.currentCount
    } else if (this.currentCount > 0) {
      this.currentCount--
    } else {
      this.currentCount = 0
    }
    return this.currentCount
  }
}


class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.season = null
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    if(this.season === null || this.season === 'spring') {
      this.season = 'summer'
      return this.season
    }
    if(this.season === 'summer') {
      this.season = 'fall'
      return this.season
    }
    if(this.season === 'fall') {
      this.season = 'winter'
      return this.season
    }
    if(this.season === 'winter') {
      this.season = 'spring'
      return this.season
    }
  }
}


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.name = name
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.tankSize = tankSize
    this.mpg = mpg
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    if(distance / this.mpg < this.tank) {
      const fuelUsed = distance / this.mpg
      this.tank = this.tank - fuelUsed
      this.odometer += distance
      return this.odometer
    } else {
      const distanceLeft = this.tank * this.mpg
      this.odometer += distanceLeft
      this.tank = 0
      return this.odometer
    }
  }
  
  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    let distance 
    if(this.tank + gallons <= this.tankSize) {
      this.tank += gallons
      distance = this.tank * this.mpg
      return distance
    } else {
      this.tank = this.tankSize
      distance = this.tank * this.mpg
      return distance
    }
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  if(number % 2 === 0) {
    return true
  } else {
    return false
  }
}
isEvenNumberAsync(2)
.then(res => console.log(res))

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
