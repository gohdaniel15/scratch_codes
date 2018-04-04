class Address

  def initialize(postal_code, street_name)
    @postal_code = postal_code
    @street_name = street_name
  end

  def say_address
    "My address is #{@postal_code}, #{@street_name}"
  end

end

add1 = Address.new(12345, 'Tg Pagar Rd')
add2 = Address.new(54321, 'Maxwell St')

p add1.say_address