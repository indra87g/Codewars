def make_negative( number ):
    # ignore zero
    if number == 0:
        return 0
    return number if number < 0 else -number 