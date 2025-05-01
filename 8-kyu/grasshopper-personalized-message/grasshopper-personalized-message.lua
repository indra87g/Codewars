local function greet(name, owner)
  -- if name equals owner, return Hello boss
  if name == owner then
    return 'Hello boss'
  -- otherwise, return Hello guest
  else
    return 'Hello guest'
  end
end
​
return greet;