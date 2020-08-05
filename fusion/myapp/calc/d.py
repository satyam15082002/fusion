def check(a=[]):
    def deco(func):
        def wrap(request,*args,**kwargs):
            print("hello")
            print(a)
            return func(request,*args,**kwargs)
        return wrap
    return deco