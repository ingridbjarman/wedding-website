export default function TravelContent() {
    return (
        <div className="font-montserrat font-extralight text-md md:text-xl text-slate-600 flex flex-col gap-8">
          <h1 className="font-light">Travelling to Sweden</h1>
          <p>For those who will be flying, the closest airport is Stockholm Arlanda (ARN). You can travel to Uppsala from the airport via train, bus or car in less than an hour.</p>
          <div className="flex flex-col pl-4 pr-2 md:px-6">
            <h1 className="font-light">Train</h1>
            <p>The train takes approximately 20 minutes and takes you to the Uppsala central train station. You need a ticket for the train, and all adults (17+) need to pay an additional fee at the airport. In total, around £20 each way (less for children 7-17 and under 7s travel for free). Tickets can be bought using the machines at the airport or via the “UL” app (Uppsala’s public transportation app).</p>
          </div>
          <div className="flex flex-col pl-4 pr-2 md:px-6">
            <h1 className="font-light">Bus</h1>
            <p>The bus will also take you to the Uppsala train station, in 45-50 minutes. The ticket price is the same as for the train but there is no airport fee, so the total works out around £10 instead. Tickets can be bought using the same app mentioned above, the “UL” app. </p>
          </div>
          <div className="flex flex-col pl-4 pr-2 md:px-6">
            <h1 className="font-light">Taxi</h1>
            <p>If you would prefer to travel by taxi, that’s also an option. I suggest using an app called “Uppsala Taxi”, which is one of the bigger taxi companies in the area. You can book in advance via the app, or when you’ve landed. The car journey takes around 40 minutes and usually costs £55-£60. If you need a larger vehicle, I recommend calling instead of using the app. </p>
          </div>
          <div className="flex flex-col pl-4 pr-2 md:px-6">
            <h1 className="font-light">Car hire</h1>
            <p>For those looking to rent a car, Arlanda Airport has a convenient web page that lets you search multiple companies for the best offers. You can find that page <a className="hyperlink underline text-slate-400 hover:text-terracotta" href="https://www.swedavia.com/arlanda/carrental/">here</a>. All British passports are valid in Sweden, just remember that you’ll be driving on the other side of the road! </p>
          </div>
          <div className="flex flex-col py-10">
            <h1 className="font-light">Visiting Stockholm</h1>
            <p>If you are spending any time in Stockholm before travelling to Uppsala, there are other trains and buses available (the Arlanda Express for example!) as well as other taxi companies. The local transportation network in Stockholm is called “SL” and they also have an app where you can buy tickets and view schedules for all kinds of transportation. Travelling from Stockholm to Uppsala is also very easy, only 45-55 minutes on the train!</p>
          </div>
        </div>
    )
}