def smash(words):
    # variable for result
    result = ""
    
    # for every word in words array, add it to result variable with a space
    for word in words:
        result += word + " "
        
    # return the result
    return result.strip()
    