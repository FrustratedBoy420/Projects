function convert(value, initial_unit, final_unit) {
    console.log(typeof value)
    console.log(typeof initial_unit)
    console.log(typeof final_unit)
    let final_value;
    if (initial_unit == "Kilometer") {
        if (final_unit == "Mile") { final_value = value / 1.6 }
        else if (final_unit == "Ft") { final_value = value * 3281 }
        else if (final_unit == initial_unit) { alert(`Its is Same Unit`) }
        else { alert(`InValid Unit to Convert`) }
    } else if (initial_unit == "Mile") {
        if (final_unit == "Kilometer") {
            final_value = value * 1.6
        } else if (final_unit == "Ft") { final_value = value * 5280 } else if
            (final_unit == initial_unit) { alert(`Its is Same Unit`) } else { alert(`InValid Unit to Convert`) }
    } else if
        (initial_unit == "Ft") {
        if (final_unit == "Mile") { final_value = value / 5280 } else if (final_unit == "Kilometer") {
            final_value = value / 3281
        } else if (final_unit == initial_unit) { alert(`Its is Same Unit`) } else {
            alert(`InValid Unit to Convert`)
        }
    } else { alert(`Invalid`) } document.querySelector(".result")
        .innerHTML = `${value} ${initial_unit} converted into ${final_value} ${final_unit}`
}