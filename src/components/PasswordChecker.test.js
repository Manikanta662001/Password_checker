import {render,screen,fireEvent} from '@testing-library/react';
import PasswordChecker from './PasswordChecker';


describe('PasswordChecker testing',()=>{
    test('check heading',()=>{
        render(<PasswordChecker/>)
        expect(screen.getByRole('heading',{level:1})).toBeInTheDocument()
    })
    test('initially it will show Show Password button',()=>{
        render(<PasswordChecker/>)
        expect(screen.getByRole('button',{name:'Show Password'})).toBeInTheDocument()
        expect(screen.getByRole('button',{name:'Clear Password'})).toBeInTheDocument()
    })
    test('it will show Hide Password button',async()=>{
        render(<PasswordChecker/>)
        const btn=screen.getByRole('button',{name:'Show Password'})
        fireEvent.click(btn)
        expect(await screen.getByRole('button',{name:'Hide Password'})).toBeInTheDocument()
        
    })
    test('it will reset the Password when we click Clear Password button',()=>{
        render(<PasswordChecker/>)
        fireEvent.change(screen.getByTestId('passwordinput'),{target:{value:'hello'}})
        const btn=screen.getByRole('button',{name:'Clear Password'})
        fireEvent.click(btn)
        expect(screen.getByTestId('passwordinput')).toHaveDisplayValue('')
        
    })
    // test('it will call function when we type password',()=>{
    //     render(<PasswordChecker/>)
    //     const handlePasswordSpy = jest.spyOn(PasswordChecker.prototype, 'handlepassword');
    //     fireEvent.change(screen.getByTestId('passwordinput'),{target:{value:'hello'}})
    //     expect(handlePasswordSpy).toHaveBeenCalledTimes(1)
    // })
})