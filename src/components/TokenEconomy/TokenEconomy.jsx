import React from "react";

const TokenEconomy = () => {
  return (
    <div id="Tokonomics" className="mb-32">
      <h2 className="text-textcolor font-[700] font-montserrat text-center text-[2.5em] pb-12">
        Token Economy
      </h2>

      <table class="table-auto text-[#ffffff] mx-auto w-5/6">
        <tbody>
          <tr className="bg-[#F573CD]">
            <td className="py-3 px-2 font-[500] font-montserrat"></td>
            <td className="py-3 px-2 font-[500] font-montserrat">Allocation</td>
            <td className="py-3 px-2 font-[500] font-montserrat">Token</td>
            <td className="py-3 px-2 font-[500] font-montserrat">Value</td>
            <td className="py-3 px-2 font-[500] font-montserrat">Vesting</td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-[500] font-montserrat">Public</td>
            <td className="py-3 px-2 font-[500] font-montserrat">15%</td>
            <td className="py-3 px-2 font-[500] font-montserrat">15,000,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">$300,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat"></td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-[500] font-montserrat">Team</td>
            <td className="py-3 px-2 font-[500] font-montserrat">10%</td>
            <td className="py-3 px-2 font-[500] font-montserrat">10,000,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">$200,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">
              12 Months cliff linear vesting over 24months
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-[500] font-montserrat">Advisor</td>
            <td className="py-3 px-2 font-[500] font-montserrat">5%</td>
            <td className="py-3 px-2 font-[500] font-montserrat">5,000,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">$100,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">
              12 Months cliff linear vesting over 24months
            </td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-[500] font-montserrat">
              Marketing/Media
            </td>
            <td className="py-3 px-2 font-[500] font-montserrat">20%</td>
            <td className="py-3 px-2 font-[500] font-montserrat">20,000,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">$400,000</td>
            <td className="py-3 px-2 font-[500] font-montserrat">
              Linear vesting Over 24months
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold">LP</td>
            <td className="py-3 px-2 font-bold">25%</td>
            <td className="py-3 px-2 font-bold">25,000,000</td>
            <td className="py-3 px-2 font-bold">$500,000</td>
            <td className="py-3 px-2 font-bold">Ondemand</td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-bold">Ecosystem</td>
            <td className="py-3 px-2 font-bold">25%</td>
            <td className="py-3 px-2 font-bold">25,000,000</td>
            <td className="py-3 px-2 font-bold">$500,000</td>
            <td className="py-3 px-2 font-bold">Ondemand</td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold"></td>
            <td className="py-3 px-2 font-bold"></td>
            <td className="py-3 px-2 font-bold">100,000,000</td>
            <td className="py-3 px-2 font-bold">2,000,000</td>
            <td className="py-3 px-2 font-bold"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TokenEconomy;
