def count_positives_sum_negatives(lst)

  sum_negative = lst.reduce(0) do |acc, num|
    acc + num if num < 0
  end
  sum_positive = lst.reduce(0) do |acc, num|
    acc + num if num >= 0
  end

  [sum_positive, sum_negative]

end

p count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
