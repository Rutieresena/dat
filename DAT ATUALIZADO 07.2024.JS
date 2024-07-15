// ==UserScript==
// @name        💎 Diamantes Ataque Tools 5.0.1 _PT💎
// @namespace   https://www.offboardbr.tk
// @version     5.0.1
// @description Script de automatização I.O.
// @match       *.imperiaonline.org/imperia/game_v6/game/village.php*
// @match       *.gameofemperors.com/imperia/game_v6/game/village.php*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=imperiaonline.org
// @copyright   2016+, jmota.pc / Suporte e vendas Rutiere
// @require     https://code.jquery.com/jquery-latest.js
// @require     https://code.jquery.com/jquery-3.6.3.min.js
// @require     https://code.jquery.com/ui/1.13.1/jquery-ui.min.js
// @grant	    GM_registerMenuCommand
// @grant	    GM_setValue
// @grant	    GM_getValue
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

//----------------------------------------------------------------------------------------------------------------- */

var login = ''
var $ = window.jQuery;
var IdProfile = playerName


        setTimeout(function() {

            var tempo_reload = 60000;
            var e = 0;
            var isActive = "false";
            var f = GM_getValue(playerName + "ScriptStart", "false");
            var g = GM_getValue(playerName + "ScriptAtaque", "true");
            var h = GM_getValue(playerName + "ScriptAtaqueAli", "true");
            var i = GM_getValue(playerName + "ScriptSpy", "true");
            var j = GM_getValue(playerName + "ScriptMsg", "true");
            var k = GM_getValue(playerName + "Scriptcaptcha", "true");
            var a = GM_getValue(playerName + "ScriptRefresh", "true");
            var v = GM_getValue(playerName + "ScriptMoverRec", "true");
            var p = GM_getValue(playerName + "ScriptEmpregarPop", "true");
            var r10 = GM_getValue(playerName + "ScriptReduzir10min", "true");
            var rv = GM_getValue(playerName + "ScriptRecVassalo", "true");
            var mad = GM_getValue(playerName + "ScriptMoverMad", "false");
            var fer = GM_getValue(playerName + "ScriptMoverFer", "false");
            var ped = GM_getValue(playerName + "ScriptMoverPed", "false");
            var ignore10 = GM_getValue(playerName + "ScriptAtaqueIgnore10", "true");
            var incognito = GM_getValue(playerName + "ScriptIncognito", "true");
            var imposto = GM_getValue(playerName + "ScriptImposto", "true");
            var assistencia = GM_getValue(playerName + "ScriptAssistencia", "true");
            var cinst = GM_getValue(playerName + "ScriptCinst", "true");
            var som_ataque = "https://www.soundrangers.com/demos/sirens/ambulance_siren.mp3";
            var som_alianca = "https://www.soundrangers.com/demos/sirens/firetruck_siren.mp3";
            var som_ignore10 = "https://www.soundrangers.com/demos/sirens/ambulance_siren.mp3";
            var som_spy = "https://www.soundrangers.com/demos/sirens/ambulance_siren.mp3";
            var som_mp = "https://www.soundrangers.com/demos/sirens/ambulance_siren.mp3";
            var som_captcha = "https://www.soundrangers.com/demos/sirens/ambulance_siren.mp3";
            var img_inactive = "sim-skill skill-emperor tooltip-arrow ui-pass";
            var img_active = "large-circle-buttons cancel ui-active";

            // ==================================================== DIAMANTES ATAQUE TOOLS =============================================================================

           $('head').append('<style type="text/css">.buttonPlayScript{display: inline-block;margin: 0px;color: #F1ECDC;font-weight: bold;font-family: inherit;text-align: center;text-shadow: 1px 1px #000000;text-decoration: none;white-space: nowrap;outline: none;cursor: pointer;background: url("https://ihcdn3.ioimg.org/iov6live/gui/buttons.png?v=71") repeat-x;border: 1px solid #5A4436;box-sizing: content-box;box-shadow: 0px 0px 0px 3px rgba(122,90,71,0.2),0px 2px 0px 0px rgba(255,255,255,0.5) inset;min-width: 20px;height: 22px;line-height: 22px;padding: 0px 10px;font-size: 14px;text-transform: none;border-radius: 4px;vertical-align: top;margin-top: 3px;}.buttonPlayScript.Castanho{background-position: 0px -96px;}.buttonPlayScript.Castanho:hover{background-position: 0px -120px;}.buttonPlayScript.Vermelho{background-position: 0px -288px;}.buttonPlayScript.Vermelho:hover{background-position: 0px -312px;}.buttonPlayScript.Azul{background-position: 0px -752px;}.buttonPlayScript.Azul:hover{background-position: 0px -752px;}.buttonPlayScript.Verde{background-position: 0px -842px;}.buttonPlayScript.Verde:hover{background-position: 0px -842px;}.ui-icons-script{display: inline-block !important;width: 27px;height: 28px;line-height: 28px;background-image: url("https://ihcdn3.ioimg.org/iov6live/gui/village-v6/ui-footer-small.png?v=716");background-position: 0px 0px;}.ui-icons-script:hover{background-image:color:#4B0082}</style>');

           $('<div style="position:fixed;left:50px;height:0px;width: 200;z-index:0;bottom: 65px;text-align: center;align-items: align-items: center;display: flex;  flex-direction: row; flex-wrap: wrap;justify-content: center;center;-webkit-justify-content: center;-webkit-align-items: center;border: 0px solid #000604;border-radius: 5px;background-color: rgba(65,53,36,0.8);">'

                +
                '<audio id="AtaqueAudio" loop><source src=" ' + som_ataque + '" type="audio/wav"></audio>' +
                '<audio id="AtaqueAudioAli" loop><source src=" ' + som_alianca + '" type="audio/wav"></audio>' +
                '<audio id="AtaqueAudioIgnore10" loop><source src=" ' + som_ignore10 + '" type="audio/wav"></audio>' +
                '<audio id="SpyAudio" loop><source src=" ' + som_spy + '" type="audio/wav"></audio>' +
                '<audio id="captchaAudio" loop><source src=" ' + som_captcha + '" type="audio/wav"></audio>' +
                '<audio id="MessageAudio" loop><source src=" ' + som_mp + '" type="audio/wav"></audio>' +
                '<div id="Open_Aba_Açoes" class="' + img_inactive + '" style="cursor:pointer; "></div>' +
                '<div>').appendTo('body');

            // ========================================================================== JANELA DE OPÇÕES =======================================================================

            $('<div id="Aba_Açoes" class="window-wrapper active ui-draggable " style="top: -22 px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">'

                +
                '<div class="window-title"><a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title"><div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Açoes" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

                +
                '<li class="Aba_Açoes active "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'
                
                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +
                '<div style="height:18px;display:block;">' +
                '<div class="checkbox-wrap inline-ie"> <input type="checkbox" id="chkAtaque" class="checkbox ui-pass"> </div>Alerta de Ataque ' +
                '<button id="PrevAudioAtaque" style="float: right;" class="buttonPlayScript Verde">♫</button>' +
                '<button id="StopAudioAtaque" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;">' +
                '<div class="checkbox-wrap inline-ie"> <input type="checkbox" id="chkAtaqueIgnore10" class="checkbox ui-pass"> </div>' +
                'Ignorar Ataques com mais de 10 minutos ' +
                '<button id="PrevAudioAtaqueIgnore10" style="float: right;" class="buttonPlayScript Verde">♫</button>' +
                '<button id="StopAudioAtaqueIgnore10" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button>' +
                '</div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:25px;display:block;">' +
                '<div class="checkbox-wrap inline-ie"> <input type="checkbox" id="chkRefresh" class="checkbox ui-pass"> </div>Auto Reload da Página<hr class="divider"></div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px; display:block;  "> <div></div>Mover Recursos para Provincia Atual ' +
                '<button id="bntmoverrecusos" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Stopmoverrecusos" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider"></div><div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkEmpregarPop"  class="checkbox ui-pass"></div>Empregar População</div>' +
                '<div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkReduzir10min" class="checkbox ui-pass"></div>Reduzir 10 Minutos</div>' +
                '<div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkRecVassalo"   class="checkbox ui-pass"></div>Recolher Ouro dos Vassalos</div>' +
                '<div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkImposto"      class="checkbox ui-pass"></div>Manter Imposto Ótimo</div>' +
                '<div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkAssistencia"  class="checkbox ui-pass"></div>Solicitar Assistencia</div>' +
                '<div style="height:25px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkCinst"        class="checkbox ui-pass"></div>Construção instantânea</div>' +
                '<div style="height:18px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkIncognito"    class="checkbox ui-pass"></div>Manter Incógnito</div>' +
                '<div style="height:18px;display:block;">'

                +
                '<div></div><hr class="divider"></div>' +
                '<div style="height:18px;display:block;">'

                +
                '<div class="checkbox-wrap inline-ie"> <input type="checkbox" id="chkAtaqueAli"   class="checkbox ui-pass"> </div>Alerta de Ataque Aliança ' +
                '<button id="PrevAudioAtaqueAli" style="float: right;" class="buttonPlayScript Verde">♫</button>' +
                '<button id="StopAudioAtaqueAli" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button></div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;">' +
                '<div class="checkbox-wrap inline-ie"> <input type="checkbox" id="chkSpy" class="checkbox ui-pass"> </div>Alerta de Spy' +
                '<button id="PrevAudioSpy" style="float: right;" class="buttonPlayScript Verde">♬</button>' +
                '<button id="StopAudioSpy" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button></div>'

                +
                '<hr class="divider"><div style="height:18px;display:block;"> '

                +
                '<div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkMsg" class="checkbox ui-pass"> </div>Alerta de Mensagem Privada' +
                '<button id="PrevAudioMsg" style="float: right;" class="buttonPlayScript Verde">♫</button>' +
                '<button id="StopAudioMsg" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button></div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;"><div class="checkbox-wrap inline-ie"><input type="checkbox" id="chkcaptcha"class="checkbox ui-pass"></div>Alerta de Captcha' +
                '<button id="PrevAudiocaptcha" style="float: right;" class="buttonPlayScript Verde">♫</button>' +
                '<button id="StopAudiocaptcha" style="float: right;display:none;" class="buttonPlayScript Vermelho">♬</button></div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px; display:block;  "> <div></div>ATIVAR ABA AÇOES ' +
                '<button id="play" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Pause" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'


                +
                '<div id="confirmationSettings" class="centered"> <div class="centered-block" style="">' +
                '<button class="button blue " type="button" id="Btn_Salvar_Options" value="Guardar">Salvar</button>' +
                '<div class="centered-block" style="">'

                +
                '</div> </div> </div> '
                +
                '</div> </div> </div>'
                +
                '<div class="window-footer">2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-top"> </div></div></div></div></div>').appendTo('body');

            // ========================================================================== ABA CONSTRUÇÕES ========================================================================

            $('<div id="Aba_Construcoes" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">'

                +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Construcoes" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

               +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes active"><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'

                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +

                '<h2 class="title">PARTE ECONOMICA </h2>'
                +
                '</ul>'

                +
                '<div style="height:20px; display:block;  "> <div></div>Mercado ' +
                '<button id="bntCarregarMercado" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarMercado" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div>Monumentos ' +
                '<button id="bntCarregarMonumentos" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarMonumentos" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Estação de Transporte ' +
                '<button id="bntCarregarEstacaodeTransporte" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarEstacaodeTransporte" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Praça Central ' +
                '<button id="bntCarregarPraçaCentral" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarPraçaCentral" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;"> <div</div>Casas ' +
                '<button id="bntCarregarCasas" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarCasas" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Fazendas ' +
                '<button id="bntCarregarFazendas" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarFazendas" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Serraria ' +
                '<button id="bntCarregarSerraria" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarSerraria" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Mina de Ferro ' +
                '<button id="bntCarregarMinaDeFerro" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarMinaDeFerro" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Pedreira ' +
                '<button id="bntCarregarPedreira" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarPedreira" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Estradas Imperiais ' +
                '<button id="bntCarregarEstradasImperiais" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarEstradasImperiais" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '</ul>'
                +

                '<h2 class="title"> PARTE MILITAR </h2>'

                +
                '</ul>'

                +
                '<div style="height:20px;display:block;"> <div</div>Quarteis '+
                '<button id="bntCarregarQuarteis" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarQuarteis" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'
				+
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div> Quartel de Arqueiros ' +
                '<button id="bntCarregarquarteldearqueiro" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarquarteldearqueiro" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Quartel de Infantaria ' +
                '<button id="bntCarregarquarteldeinfantaria" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarquarteldeinfantaria" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Quartel de Cavalaria ' +
                '<button id="bntCarregarquarteldecavalaria" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarquarteldecavalaria" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Quartel de Espiões ' +
                '<button id="bntCarregarquarteldeespioes" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarquarteldeespioes" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Oficina de Máquinas de Cerco ' +
                '<button id="bntCarregaroficinamaquinacerco" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregaroficinamaquinacerco" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Construir Cortina de Muralhas ' +
                '<button id="bntCarregarcortinademuralha" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarcortinademuralha" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Construir Fosso ' +
                '<button id="bntCarregarfosso" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregarfosso" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div> Construir Torres ' +
                '<button id="bntCarregartorre" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopCarregartorre" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

		        +
                '<hr class="divider">'

                +

                '<h2 class="title">OBS:Crie um nivel de Grêmio dos Arquitetos para utilizar essa aba </h2>'

                +
                '</div> </div> </div> </div> '

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');

// ========================================================================== ABA RECRUTAMENTOS ========================================================================

            $('<div id="Aba_Recrutamentos" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Recrutamentos" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

               +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos active"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'

                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +
                '<hr class="divider">'

                +

                '<h2 class="title">RECRUTAR LEVES</h2>'
                +
                '</ul>'

                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Espiões' +
                '<button  id="bntRecEspioes" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button  id="StopRecEspioes" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'
				+
                '<hr class="divider">'

				+
                '<div style=background-color:rgba(65,53,36,0.8)"height:20px;display:block;"> <div</div>Recrutar Arqueiros Leves' +
                '<button  id="bntRecArqueirosleves" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>'+
                '<button  id="StopRecArqueirosleves" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div>Recrutar Espadachim Leves' +
                '<button  id="bntRecEspadachimLeves" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button  id="StopRecEspadachimLeves" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <div</div>Recrutar Lanceiros Leves' +
                '<button  id="bntReclanceirosleves" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button  id="StopReclanceirosleves" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'
                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Cavalos Leves' +
                '<button  id="bntRecCavalosleves" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button  id="StopRecCavalosleves" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'
				+
                '<hr class="divider">'

                +

                '<h2 class="title">RECRUTAR PESADOS</h2>'
                +
                '</ul>'

                +
                '<div style="height:20px;display:block;"> <div></div>Recrutar Arqueiros Pesados' +
                '<button id="bntRecArqueirospesados" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecArqueirospesados" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'
                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Espadachim Pesado' +
                '<button id="bntRecEspadachimPesado" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecEspadachimPesado" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;"> <div</div>Recrutar Lanceiros Pesados' +
                '<button id="bntReclanceirospesados" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>'+
                '<button id="StopReclanceirospesados" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'


                +
                '<hr class="divider">'

                +

                '<h2 class="title">RECRUTAR ELITES</h2>'
                +
                '</ul>'


                +
                '<hr class="divider">'
                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Guardiões' +
                '<button id="bntRecGuardioes" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecGuardioes" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;"> <div</div>Recrutar Falanges' +
                '<button id="bntRecFalanges" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecFalanges" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Paladinos' +
                '<button id="bntRecPaladinos" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecPaladinos" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Recrutar Arqueiros' +
                '<button id="bntRecArqueiros" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopRecArqueiros" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'
                +

                '<h2 class="title">EVOLUIR TROPAS</h2>'
                +
                '</ul>'


				+
                '<hr class="divider">'

				+
                '<div style="height:20px; display:block;  "> <div></div>Evoluir Arqueiros' +
                '<button id="bntEvoarqueiroselite" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopEvoarqueiroselite" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'

				+
                '<div style="height:20px; display:block;  "> <div></div>Evoluir Guardiões' +
                '<button id="bntEvoguardaselite" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopEvoguardaselite" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'
+
                '<div style="height:20px; display:block;  "> <div></div>Evoluir Falanges' +
                '<button id="bntEvoFalangeselite" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopEvoFalangeselite" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

				+
                '<hr class="divider">'

				+
                '<div style="height:20px; display:block;  "> <div></div>Evoluir Paladinos' +
                '<button id="bntEvocavaloselite" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopEvocavaloselite" style="float: right;display:none;" class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '</div> </div> </div> </div>'

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');

            // ========================================================================== ABA EVENTOS=============================================================================

            $('<div id="Aba_Eventos" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Eventos" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

              +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos active"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'

                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px; display:block;  "> <div></div>Atacar Fortaleza das Trevas' +
                '<button id="bntAtkFortaleza" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkFortaleza" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div>Atacar Prisão de Pedra' +
                '<button id="bntAtkPrisao" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkPrisao" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Atacar Cranio da Abundância' +
                '<button id="bntAtkCranio" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkCranio" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div</div>Atacar Torre do Conhecimento' +
                '<button id="bntAtkTorre" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkTorre" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:18px;display:block;"> <div</div>Atacar Castelo Eterno' +
                '<button id="bntAtkCastelo" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkCastelo" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">' +
                '<div class="notice positive"><span></span>' +
                '<div class=""regime-holder""id=""regime-1"">' +
                '<div class=""regime-desc ui-ib"">' +
                '<ul class=""border-bonuses"">' +
                '<li class=""regime-little-icon regime-positive-icon positive-bonuses tleft">ORDEM DOS EVENTOS: <br></li>'

                +
                '<hr class="divider">'

                +
                '</div>'

                +
                '<li class="txt">1⃣ → Fortaleza das Trevas <br></li>' +
                '<li class="txt">2⃣ → Prisão de Pedra <br></li>' +
                '<li class="txt">3⃣ → Cranio da Abundância <br></li>' +
                '<li class="txt">4⃣ → Torre do Conhecimento <br></li>' +
                '<li class="txt">5⃣ → Castelo Eterno <br></li>'

                +
                '</ul>'

                +
                '</div> </div>' +
                '</div> </div> </div></div>'

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');

// ========================================================================== ABA ESPECIALIZAÇOES=========================

            $('<div id="Aba_Especializações" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Especializações" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

                +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				//'<li class="Aba_Especializações "><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'

                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +
                '<hr class="divider">'
                +
                '<div style="height:20px; display:block;  "> <h2 class="title">Especializar Lanceiros</h2>' +
                '<button id="bnt" style="float: right;" class="buttonPlayScript Vermelho">EM BREVE</button>' +
                '<button id="Stop" style="float: right;display:none;"class="buttonPlayScript Verde">ON🔒</button> </div>'

                +
                '<hr class="divider">'
                +
                '<div style="height:20px; display:block;  "> <h2 class="title">Especializar Arqueiros</h2>' +
                '<button id="bnt" style="float: right;" class="buttonPlayScript Vermelho">EM BREVE</button>' +
                '<button id="Stop" style="float: right;display:none;"class="buttonPlayScript Verde">ON🔒</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <h2 class="title">Especializar Espadachins</h2>' +
                '<button id="bnt" style="float: right;" class="buttonPlayScript Vermelho">EM BREVE</button>' +
                '<button id="Stop" style="float: right;display:none;"class="buttonPlayScript Verde">ON🔒</button> </div>'

                +
                '<hr class="divider">'


                +
                '<div style="height:20px;display:block;"> <h2 class="title">Especializar Cavalaria</h2>'+
                '<button id="bnt" style="float: right;" class="buttonPlayScript Vermelho">EM BREVE</button>' +
                '<button id="Stop" style="float: right;display:none;"class="buttonPlayScript Verde">ON🔒</button> </div>'

                +
                '<hr class="divider">'

				+
                '<div style="height:20px;display:block;"> <h2 class="title">Especializar Cerco</h2>' +
                '<button id="bntAtkCI" style="float: right;" class="buttonPlayScript Vermelho">EM BREVE</button>' +
                '<button id="StopAtkCI" style="float: right;display:none;"class="buttonPlayScript Verde">ON🔒</button> </div>'

                +
                '<hr class="divider">'

                +
                '</div> </div> </div> </div>'

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');

                // ========================================================================== ABA DOBRO OU NADA=============================================================================

            $('<div id="Aba_Dobro" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Dobro" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

                +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro active"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'

                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'+

                '<div class="gambling-content">'+
                '<div id="errMsg"></div>'+
                '<div class="gambling-holder mauto">'+
                '<div class="gambling-title tcenter">'+
                'Dobro <span>ou</span> nada <span>by</span> Rutiere0105 </div>'+
                '<div class="gmbl-btn w100">'+
                '<div class="gmbl-girl"></div>'+
                '<div class="gmbl-cards-holder">'+
                '<div class="gmbl-cards-text mauto" id="gmblText">'+
                '<p class="tleft io-animm-fix" style="">Compre a Planilha para Continuar Acertando o Dobro😁!'+
                '</div>'+

                '<div class="gmbl-color-btns tcenter w100">'+
                '<div class="visual-loading">'+



                '<div style="height:20px;display:block;"><button class="button bright-red vam" type="button" id="btnDobVerm" value="Carregar">VERMELHO</button>'+

                '&nbsp;&nbsp;&nbsp;ou&nbsp;&nbsp;&nbsp;'+

                '<button class="button  black vam" type="button" id="btnDobPreto" value="Carregar">PRETO</button>'+

                '<h3 class="title">Advinhe a Primeira Carta e Depois Clique para Dobrar sem Perder Nada</h3>'+
                '<h3class="title">Para Duvidas +55 88993067590</h3'

                +
                '</div></div>'
                +
                '</div> </div> </div> '
                +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');


            // ========================================================================== ABA PESQUISA AVANÇADA=============================================================================

           /* $('<div id="Aba_Pesquisa" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +

                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Pesquisa" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

                +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes"><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                '<li class="Aba_Pesquisa active"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras"><a href="#"><div></div>Extras</a></li>'


                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

               + '<button class="button blue" type="button" id="btnExport" value="Guardar" >Exportar🔒</button>'

               + '<hr class="divider">'+
               '<button class="button " type="button" id="bntCarregarRE" value="Carregar">RE🔒</button>'+
               '<button class="button " type="button" id="bntCarregarEC" value="Carregar">EC🔒</button>'+
               '<button class="button " type="button" id="bntCarregarPM" value="Carregar">PM🔒</button>'+
               '<button class="button " type="button" id="bntCarregarCM" value="Carregar">CM🔒</button>'+
               '<button class="button " type="button" id="bntCarregarCO" value="Carregar">CO🔒</button>'+
               '<div></div><hr class="divider"><div style="width:500px;margin: auto;"></div></div> </div> </div><table id="resultadosMilitares" class="data-grid middle"> <tr> <th>Aliança</th> <th>Jogador</th> <th>X</th> <th>Y</th> <th>Ir</th> </tr> </table>'

                +
                '</div> '

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"></div> </div> </div>  </div></div>').appendTo('body');

*/
            // ========================================================================== ABA Extras ========================================================================

            $('<div id="Aba_Extras" class="window-wrapper active ui-draggable zoom" style="top: 0px; -webkit-transform-origin: 0px 0px; -webkit-transform: matrix(0.8, 0, 0, 0.8, 0, 0);display:none;">' +
                '<div class="window-title">' +
                '<a class="ui-ib fleft info"" title="Avaliar"></a>' +
                '<span class="ui-ib fleft title-separator"></span>' +
                '<a class="ui-ib fleft refresh"" title="Atualizar"></a>' +
                '<div class="title">' +
                '<div class="arrow left disabled"></div>' +
                '<span class="txt-title">💎DAT 5.0.1 /2024💎</span>' +
                '<div class="arrow right disabled"></div>' +
                '</div>'

                +
                '<a class="ui-ib fright close" href=""#" id="Close_Aba_Extras" class="close" onmouseup="' +
                '$(this).closest(\'.ui-draggable\').removeClass(\'no-drag\');" onmousedown="' +
                '$(this).closest(\'.ui-draggable\').addClass(\'no-drag\');" title="Fechar"></a>'

                +
                '<span class="ui-ib fright title-separator"></span>' +
                '<a class="ui-ib fright help""></a></div>'

                +
                '<div id="messageboxScript" class="window-content">' +
                '<ul class="window-tabs narrow" style="display: block;">'

                +
                '<li class="Aba_Açoes "><a href="#"><div style="background-position: -120px -360px;"></div>Ações</a></li>' +
                '<li class="Aba_Construcoes "><a href="#"><div></div>Construir</a></li>' +
                '<li class="Aba_Recrutamentos"><a href="#"><div></div>Recrutar</a></li>' +
                '<li class="Aba_Eventos"><a href="#"><div></div>Eventos</a></li>' +
				////'<li class="Aba_Especializações"><a href="#"><div></div>Especializações</a></li>' +
                '<li class="Aba_Dobro"><a href="#"><div></div>Dobro</a></li>' +
                //'<li class="Aba_Pesquisa"><a href="#"><div></div>Pesquisa</a></li>' +
                '<li class="Aba_Extras active"><a href="#"><div></div>Extras</a></li>'


                +
                '</ul>'

                +
                '<span class="window-decor-left"></span><span class="window-decor-right"></span>' +
                '<div class="window-size window-wide town-hall-main clear"">'+

                '<div class="content settings-empire"><div style="width:600px;margin: auto;">'
                +
                '<div class="centered-block" style=""> <div style="width:600px;margin: auto;">'

                +
                '<hr class="divider">'
                +
                '<div style="height:20px; display:block;  "> <div></div>50 Treinos de Governadores' +
                '<button id="bntTreinoGov" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopTreinoGov" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'
                +
                '<div style="height:20px; display:block;  "> <div></div>50 Treinos de Generais' +
                '<button id="bntTreinoGenerais" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopTreinoGenerais" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div> Atacar Caverna da Conquista' +
                '<button id="bntAtkCaverna" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkCaverna" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'


                +
                '<div style="height:20px;display:block;"> <div></div> Atacar Caverna Instantaneno' +
                '<button id="bntAtkCavernainst" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="StopAtkCavernainst" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div> Mover Exercito Entre Provincias' +
                '<button id="bntmovertrop" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Stopmovertrop" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div> Caça Ovos 2024' +
                '<button id="bntacharovos" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Stopacharovos" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div> Caçar Bolas 2024' +
                '<button id="bntacharbolas" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Stopacharbolas" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'

                +
                '<div style="height:20px;display:block;"> <div></div> Ler Cidades Independentes e Exportar' +
                '<button id="bntextcity" style="float: right;" class="buttonPlayScript Vermelho">OFF</button>' +
                '<button id="Stopextcity" style="float: right;display:none;"class="buttonPlayScript Verde">ON</button> </div>'

                +
                '<hr class="divider">'
                +
                '<div style="text-align: center;">'+
                '<button class="button" type="button" id="btnMovAll" value="MovAll">Mover Recursos</button>'+
                '</div>'

                +
                '<div class="notice positive"><span></span>' +
                '<div class=""regime-holder""id=""regime-1"">' +
                '<div class=""regime-desc ui-ib"">' +
                '<ul class=""border-bonuses"">' +
                '<li class=""regime-little-icon regime-positive-icon positive-bonuses tleft">EM BREVE: <br></li>'

                +
                '<hr class="divider">'

                +
                '<li class="regime-little-icon regime-positive-icon positive-bonuses tleft">Encontrar Recusos Especiais<br></li>' +
                '<li class="regime-little-icon regime-positive-icon positive-bonuses tleft">ATK Com 1 Seg de Diferença<br></li>' +
                '<li class="regime-little-icon regime-positive-icon positive-bonuses tleft">Correções Botões em Geral</li>'

                +
                '</ul>' +
                '<hr class="divider">' +
                '<li class=""regime-little-icon regime positive-bonuses tleft">PARA MAIS INFORMAÇÕES, NOSSO CONTATO ➽ +55 (88) 99306-7590 <br></li>'

                +
                '</div> </div></div>'

                +
                '</div> </div> </div> </div>'

                +
                '<div class="window-footer">  2010 - 2024 ©jmota.pc * Suporte e Vendas: Rutiere<div class="window-footer-top"></div>' +
                '<div class="window-footer-content"> </div> </div> </div> </div></div>').appendTo('body');


            // ========================================================================== ABA OPÇÕES CSS ========================================================================

            $("#Aba_Açoes").draggable({
                cancel: ".no-drag"
            });

            $("#Open_Aba_Açoes").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                    $("#Aba_Açoes").css("display", "none");
                    $("#Aba_Construcoes").css({
                        "display": "none"
                    });
                    $("#Aba_Recrutamentos").css({
                        "display": "none"
                    });
                    $("#Aba_Dobro").css({
                    "display": "none"
                    });
                    $("#Aba_Pesquisa").css({
                    "display": "none"
                    });

                    $("#Aba_Eventos").css({
                        "display": "none"
                    });

					$("#Aba_Especializações").css({
                    "display": "none"
                     });
                    $("#Aba_Extras").css({
                        "display": "none"
                    });
                    $("#Aba_Açoes").addClass("active");
                } else {
                    isActive = true;
                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                    $("#Aba_Construcoes").css({
                        "display": "none"
                    });
                    $("#Aba_Recrutamentos").css({
                        "display": "none"
                    });
                    $("#Aba_Eventos").css({
                        "display": "none"
                    });
					 $("#Aba_Especializações").css({
                    "display": "none"
                });
                    $("#Aba_Extras").css({
                        "display": "none"
                    });
                    $("#Aba_Dobro").css({
                    "display": "none"
                    });
                    $("#Aba_Pesquisa").css({
                    "display": "none"
                    });

                    $("#Aba_Açoes").css({
                        "display": "block",
                        "left": d
                    });
                }
            });

            $("#Close_Aba_Açoes").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });

            });

            $('.Aba_Açoes a').click(function(a) {
                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));
                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").addClass("active");
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").addClass("active");
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				$("#Aba_Eventos").addClass("active");
                $("#Aba_Especializações").css({
                    "display": "none"
                });

                $("#Aba_Especializações").addClass("active");
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Dobro").addClass("active");
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").addClass("active");
                $("#Aba_Extras").css({
                    "display": "none"
                });
                $("#Aba_Extras").addClass("active");
                $("#Aba_Açoes").addClass("active");

            });

            // ========================================================================== ABA Construcoes CSS ====================================================================

            $("#Aba_Construcoes").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Construcoes").click(function(a) {

                if (isActive) {
                    isActive = false;

                    a.preventDefault();
                    $("#Aba_Construcoes").css("display", "none");
                    $("#Aba_Construcoes").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Construcoes").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Construcoes").addClass("active");
                }
            });

            $("#Close_Aba_Construcoes").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
            });

            $('.Aba_Construcoes a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Extras").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });

                $("#Aba_Construcoes").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Construcoes").addClass("active");
                $("#AçoesScript").addClass("active");
            });

            // ========================================================================== ABA recrutamentos CSS ====================================================================

            $("#Aba_Recrutamentos").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Recrutamentos").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Recrutamentos").css("display", "none");
                    $("#Aba_Recrutamentos").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Recrutamentos").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Recrutamentos").addClass("active");
                }
            });

            $("#Close_Aba_Recrutamentos").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
            });

            $('.Aba_Recrutamentos a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Extras").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });

                $("#Aba_Recrutamentos").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Recrutamentos").addClass("active");
                $("#AçoesScript").addClass("active");
            });

            // ========================================================================== ABA Eventos CSS ========================================================================

            $("#Aba_Eventos").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Eventos").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Eventos").css("display", "none");
                    $("#Aba_Eventos").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Eventos").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Eventos").addClass("active");
                }
            });

            $("#Close_Aba_Eventos").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Eventos").css({
                    "display": "none"
                });
            });

            $('.Aba_Eventos a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Extras").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });

                $("#Aba_Eventos").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Eventos").addClass("active");
                $("#AçoesScript").addClass("active");
            });

// ======================================================================= ABA Especializaçoes CSS ========================================================================

            $("#Aba_Especializações").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Especializações").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Especializações").css("display", "none");
                    $("#Aba_Especializações").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Especializações").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Especializações").addClass("active");
                }
            });

            $("#Close_Aba_Especializações").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Especializações").css({
                    "display": "none"
                });
            });

            $('.Aba_Especializações a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });

                $("#Aba_Extras").css({
                    "display": "none"
                });

				$("#Aba_Especializações").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Especializaões").addClass("active");
                $("#AçoesScript").addClass("active");
            });
            // ======================================================================= ABA Dobro CSS ========================================================================
            $("#Aba_Dobro").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Dobro").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Dobro").css("display", "none");
                    $("#Aba_Dobro").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Dobro").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Dobro").addClass("active");
                }
            });

            $("#Close_Aba_Dobro").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Dobro").css({
                    "display": "none"
                });
            });

            $('.Aba_Dobro a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });
                $("#Aba_Extras").css({
                    "display": "none"
                });

                $("#Aba_Dobro").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Dobro").addClass("active");
                $("#AçoesScript").addClass("active");
            });


            // ======================================================================= ABA Pesquisa CSS ========================================================================
            $("#Aba_Pesquisa").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Pesquisa").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Pesquisa").css("display", "none");
                    $("#Aba_Pesquisa").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Pesquisa").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Pesquisa").addClass("active");
                }
            });

            $("#Close_Aba_Pesquisa").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });
            });

            $('.Aba_Pesquisa a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Extras").css({
                    "display": "none"
                });

                $("#Aba_Pesquisa").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Pesquisa").addClass("active");
                $("#AçoesScript").addClass("active");
            });

            // ======================================================================= ABA Extras CSS ========================================================================

            $("#Aba_Extras").draggable({
                cancel: ".no-drag"
            });
            $("#cAba_Extras").click(function(a) {

                if (isActive) {
                    isActive = false;
                    a.preventDefault();
                    $("#Aba_Extras").css("display", "none");
                    $("#Aba_Extras").addClass("active");
                } else {
                    isActive = true;

                    a.preventDefault();
                    var b = 618;
                    var c = $(document).width();
                    var d = ((c / 2) - (b / 2));

                    $("#Aba_Extras").css({
                        "display": "block",
                        "left": d
                    });
                    $("#Aba_Extras").addClass("active");
                }
            });

            $("#Close_Aba_Extras").click(function(a) {
                a.preventDefault();
                $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");
                $("#Aba_Extras").css({
                    "display": "none"
                });
            });

            $('.Aba_Extras a').click(function(a) {

                a.preventDefault();
                var b = 618;
                var c = $(document).width();
                var d = ((c / 2) - (b / 2));

                $("#Open_Aba_Açoes").addClass("" + img_active + "").removeClass("" + img_inactive + "");
                $("#Aba_Açoes").css({
                    "display": "none"
                });
                $("#Aba_Construcoes").css({
                    "display": "none"
                });
                $("#Aba_Eventos").css({
                    "display": "none"
                });
				 $("#Aba_Especializações").css({
                    "display": "none"
                });
                $("#Aba_Recrutamentos").css({
                    "display": "none"
                });
                $("#Aba_Dobro").css({
                    "display": "none"
                });
                $("#Aba_Pesquisa").css({
                    "display": "none"
                });

                $("#Aba_Extras").css({
                    "display": "block",
                    "left": d
                });
                $("#Aba_Extras").addClass("active");
                $("#AçoesScript").addClass("active");
            });

// ===================================================================== CONDIÇÕES ABA OPÇÕES =============================================================================

            if (g == "true") {
                $('#chkAtaque').prop('checked', true);
                $('#chkAtaque').parent().addClass("checked");
            } else {
                $('#chkAtaque').prop('checked', false);
            }

            if (h == "true") {
                $('#chkAtaqueAli').prop('checked', true);
                $('#chkAtaqueAli').parent().addClass("checked");
            } else {
                $('#chkAtaqueAli').prop('checked', false);
            }

            if (ignore10 == "true") {
                $('#chkAtaqueIgnore10').prop('checked', true);
                $('#chkAtaqueIgnore10').parent().addClass("checked");
            } else {
                $('#chkAtaqueIgnore10').prop('checked', false);
            }

            if (i == "true") {
                $('#chkSpy').prop('checked', true);
                $('#chkSpy').parent().addClass("checked");
            } else {
                $('#chkSpy').prop('checked', false);
            }

            if (j == "true") {
                $('#chkMsg').prop('checked', true);
                $('#chkMsg').parent().addClass("checked");
            } else {
                $('#chkMsg').prop('checked', false);
            }

            if (k == "true") {
                $('#chkcaptcha').prop('checked', true);
                $('#chkcaptcha').parent().addClass("checked");
            } else {
                $('#chkcaptcha').prop('checked', false);
            }

            if (a == "true") {
                $('#chkRefresh').prop('checked', true);
                $('#chkRefresh').parent().addClass("checked");
            } else {
                $('#chkRefresh').prop('checked', false);
            }

            if (v == "true") {
                $('#chkMoverRec').prop('checked', true);
                $('#chkMoverRec').parent().addClass("checked");
            } else {
                $('#chkMoverRec').prop('checked', false);
            }

            if (mad == "true") {
                $('#chkMoverMad').prop('checked', true);
                $('#chkMoverMad').parent().addClass("checked");
            } else {
                $('#chkMoverMad').prop('checked', false);
            }

            if (fer == "true") {
                $('#chkMoverFer').prop('checked', true);
                $('#chkMoverFer').parent().addClass("checked");
            } else {
                $('#chkMoverFer').prop('checked', false);
            }

            if (ped == "true") {
                $('#chkMoverPed').prop('checked', true);
                $('#chkMoverPed').parent().addClass("checked");
            } else {
                $('#chkMoverPed').prop('checked', false);
            }

            if (p == "true") {
                $('#chkEmpregarPop').prop('checked', true);
                $('#chkEmpregarPop').parent().addClass("checked");
            } else {
                $('#chkEmpregarPop').prop('checked', false);
            }

            if (r10 == "true") {
                $('#chkReduzir10min').prop('checked', true);
                $('#chkReduzir10min').parent().addClass("checked");
            } else {
                $('#chkReduzir10min').prop('checked', false);
            }

            if (rv == "true") {
                $('#chkRecVassalo').prop('checked', true);
                $('#chkRecVassalo').parent().addClass("checked");
            } else {
                $('#chkRecVassalo').prop('checked', false);
            }

            if (incognito == "true") {
                $('#chkIncognito').prop('checked', true);
                $('#chkIncognito').parent().addClass("checked");
            } else {
                $('#chkIncognito').prop('checked', false);
            }

            if (imposto == "true") {
                $('#chkImposto').prop('checked', true);
                $('#chkImposto').parent().addClass("checked");
            } else {
                $('#chkImposto').prop('checked', false);
            }

            if (assistencia == "true") {
                $('#chkAssistencia').prop('checked', true);
                $('#chkAssistencia').parent().addClass("checked");
            } else {
                $('#chkAssistencia').prop('checked', false);
            }

            if (cinst == "true") {
                $('#chkCinst').prop('checked', true);
                $('#chkCinst').parent().addClass("checked");
            } else {
                $('#chkCinst').prop('checked', false);
            }



            // ===================================================================== CONDIÇÕES ABA OPÇÕES =============================================================================

            if (g == "true") {
                $('#chkAtaque').prop('checked', true);
                $('#chkAtaque').parent().addClass("checked");
            } else {
                $('#chkAtaque').prop('checked', false);
            }

            // ==================================================================== FUNÇÕES BOTÕES SOM =============================================================================

            $("#PrevAudioAtaque").click(function() {
                $("#AtaqueAudio").trigger('play');
                $("#PrevAudioAtaque").css("display", "none");
                $("#StopAudioAtaque").css("display", "block");
            });

            $("#StopAudioAtaque").click(function() {
                $("#AtaqueAudio").trigger('pause');
                $("#AtaqueAudio").prop("currentTime", 0);
                $("#PrevAudioAtaque").css("display", "block");
                $("#StopAudioAtaque").css("display", "none");
            });

            $("#PrevAudioAtaqueAli").click(function() {
                $("#AtaqueAudioAli").trigger('play');
                $("#PrevAudioAtaqueAli").css("display", "none");
                $("#StopAudioAtaqueAli").css("display", "block");
            });

            $("#StopAudioAtaqueAli").click(function() {
                $("#AtaqueAudioAli").trigger('pause');
                $("#AtaqueAudioAli").prop("currentTime", 0);
                $("#PrevAudioAtaqueAli").css("display", "block");
                $("#StopAudioAtaqueAli").css("display", "none");
            });

            $("#PrevAudioAtaqueIgnore10").click(function() {
                $("#AtaqueAudioIgnore10").trigger('play');
                $("#PrevAudioAtaqueIgnore10").css("display", "none");
                $("#StopAudioAtaqueIgnore10").css("display", "block");
            });

            $("#StopAudioAtaqueIgnore10").click(function() {
                $("#AtaqueAudioIgnore10").trigger('pause');
                $("#AtaqueAudioIgnore10").prop("currentTime", 0);
                $("#PrevAudioAtaqueIgnore10").css("display", "block");
                $("#StopAudioAtaqueIgnore10").css("display", "none");
            });

            $("#PrevAudioSpy").click(function() {
                $("#SpyAudio").trigger('play');
                $("#PrevAudioSpy").css("display", "none");
                $("#StopAudioSpy").css("display", "block");
            });

            $("#StopAudioSpy").click(function() {
                $("#SpyAudio").trigger('pause');
                $("#SpyAudio").prop("currentTime", 0);
                $("#PrevAudioSpy").css("display", "block");
                $("#StopAudioSpy").css("display", "none");
            });

            $("#PrevAudioMsg").click(function() {
                $("#MessageAudio").trigger('play');
                $("#PrevAudioMsg").css("display", "none");
                $("#StopAudioMsg").css("display", "block");
            });

            $("#StopAudioMsg").click(function() {
                $("#MessageAudio").trigger('pause');
                $("#MessageAudio").prop("currentTime", 0);
                $("#PrevAudioMsg").css("display", "block");
                $("#StopAudioMsg").css("display", "none");
            });

            $("#PrevAudiocaptcha").click(function() {
                $("#captchaAudio").trigger('play');
                $("#PrevAudiocaptcha").css("display", "none");
                $("#StopAudiocaptcha").css("display", "block");
            });

            $("#StopAudiocaptcha").click(function() {
                $("#captchaAudio").trigger('pause');
                $("#captchaAudio").prop("currentTime", 0);
                $("#PrevAudiocaptcha").css("display", "block");
                $("#StopAudiocaptcha").css("display", "none");
            });

            // ========================================================================== ABA OPÇÕES CONDIÇÕES ========================================================================

            $("#Btn_Salvar_Options").click(function() {
                try {
                    GM_setValue(playerName + "ScriptAtaque", String($('#chkAtaque').prop('checked')));
                    GM_setValue(playerName + "ScriptAtaqueAli", String($('#chkAtaqueAli').prop('checked')));
                    GM_setValue(playerName + "ScriptSpy", String($('#chkSpy').prop('checked')));
                    GM_setValue(playerName + "ScriptMsg", String($('#chkMsg').prop('checked')));
                    GM_setValue(playerName + "Scriptcaptcha", String($('#chkcaptcha').prop('checked')));
                    GM_setValue(playerName + "ScriptRefresh", String($('#chkRefresh').prop('checked')));
                    GM_setValue(playerName + "ScriptMoverRec", String($('#chkMoverRec').prop('checked')));
                    GM_setValue(playerName + "ScriptEmpregarPop", String($('#chkEmpregarPop').prop('checked')));
                    GM_setValue(playerName + "ScriptReduzir10min", String($('#chkReduzir10min').prop('checked')));
                    GM_setValue(playerName + "ScriptRecVassalo", String($('#chkRecVassalo').prop('checked')));
                    GM_setValue(playerName + "ScriptIncognito", String($('#chkIncognito').prop('checked')));
                    GM_setValue(playerName + "ScriptMoverMad", String($('#chkMoverMad').prop('checked')));
                    GM_setValue(playerName + "ScriptMoverFer", String($('#chkMoverFer').prop('checked')));
                    GM_setValue(playerName + "ScriptMoverPed", String($('#chkMoverPed').prop('checked')));
                    GM_setValue(playerName + "ScriptAtaqueIgnore10", String($('#chkAtaqueIgnore10').prop('checked')));
                    GM_setValue(playerName + "ScriptImposto", String($('#chkImposto').prop('checked')));
                    GM_setValue(playerName + "ScriptAssistencia", String($('#chkAssistencia').prop('checked')));
                    GM_setValue(playerName + "ScriptCinst", String($('#chkCinst').prop('checked')));

                    $("#Open_Aba_Açoes").addClass("" + img_inactive + "").removeClass("" + img_active + "");

                } catch (err) {
                    alert("Erro ao salvar configurações!");
                }

                f = GM_getValue(playerName + "ScriptStart", "false");
                g = GM_getValue(playerName + "ScriptAtaque", "true");
                h = GM_getValue(playerName + "ScriptAtaqueAli", "true");
                i = GM_getValue(playerName + "ScriptSpy", "true");
                j = GM_getValue(playerName + "ScriptMsg", "true");
                k = GM_getValue(playerName + "Scriptcaptcha", "true");
                a = GM_getValue(playerName + "ScriptRefresh", "true");
                v = GM_getValue(playerName + "ScriptMoverRec", "true");
                p = GM_getValue(playerName + "ScriptEmpregarPop", "true");
                r10 = GM_getValue(playerName + "ScriptReduzir10min", "true");
                rv = GM_getValue(playerName + "ScriptRecVassalo", "true");
                incognito = GM_getValue(playerName + "ScriptIncognito", "true");
                mad = GM_getValue(playerName + "ScriptMoverMad", "true");
                fer = GM_getValue(playerName + "ScriptMoverFer", "true");
                ped = GM_getValue(playerName + "ScriptMoverPed", "true");
                ignore10 = GM_getValue(playerName + "ScriptAtaqueIgnore10", "true");
                imposto = GM_getValue(playerName + "ScriptImposto", "true");
                assistencia = GM_getValue(playerName + "ScriptAssistencia", "true");
                cinst = GM_getValue(playerName + "ScriptCinst", "true");

                $("#Aba_Açoes").css("display", "none");
            });

            $("#chatAudio").trigger('load');

            $("#play").click(function() {
                $("#play").css("display", "none");
                $("#Pause").css("display", "inline-block");
                GM_setValue(playerName + "ScriptStart", "true");
                f = "true";
                e = setInterval(function() {
                    console.log("Iniciando Funções");

                    if (a == "true") {
                        AutoRefresh();
                    }

                    setTimeout(function() {

                        if (g == "true") {
                            if (ignore10 == "true") {
                                if ($(".attack-me .m-time.countdown.noHours.ui-refresh").length > 0) {
                                    if ($('.attack-me .m-time.countdown.noHours.ui-refresh').text() < "10:00") {
                                        $("#AtaqueAudioIgnore10").trigger('play');
                                        xajax_viewMissions(container.open({
                                            saveName: 'missions',
                                            title: 'As minhas missões'
                                        }))
                                    }

                                }
                            } else
                            if (ignore10 == "false") {
                                if ($(".attack-me").length > 0) {
                                    $("#AtaqueAudio").trigger('play');
                                    xajax_viewMissions(container.open({
                                        saveName: 'missions',
                                        title: 'As minhas missões'
                                    }))
                                }
                            }

                        }

                        if (h == "true") {
                            if (ignore10 == "true") {
                                if ($(".attack-alliance .m-time.countdown.noHours.ui-refresh").length > 0) {
                                    if ($('.attack-alliance .m-time.countdown.noHours.ui-refresh').text() < "10:00") {
                                        $("#AtaqueAudioAli").trigger('play');
                                        xajax_viewMissions(container.open({
                                            saveName: 'missions',
                                            title: 'As minhas missões'
                                        }))
                                    }
                                }
                            } else
                            if (ignore10 == "false") {
                                if ($(".attack-alliance").length > 0) {
                                    $("#AtaqueAudioAli").trigger('play');
                                    xajax_viewMissions(container.open({
                                        saveName: 'missions',
                                        title: 'As minhas missões'
                                    }))
                                }
                            }
                        }

                        if (i == "true") {
                            if ($(".checkin-a-mail .letter-2").length > 0) {
                                $("#SpyAudio").trigger('play');
                            }
                        }

                        if (j == "true") {
                            if ($(".checkin-a-mail .letter-0").length > 0) {
                                $("#MessageAudio").trigger('play');
                            }
                        }

                        if (k == "true") {
                            console.log('Verificação Captcha ----> Ok');
                            if ($(".robot-text").length > 0) {
                                $("#AtaqueAudio").trigger('play');
                            }
                        }

                        if (v == "true") {
                            MoverRecursos();
                        }

                        if (mad == "true") {
                            MoverMadeira();
                        }

                        if (fer == "true") {
                            MoverFerro();
                        }

                        if (ped == "true") {
                            MoverPedra();
                        }
                        if (p == "true") {
                            EmpregarPopulacao();
                        }

                        if (r10 == "true") {
                            Reduzir10minutos();
                        }

                        if (rv == "true") {
                            RecolherVassalo();
                        }

                        if (incognito === "true") {
                            Incognito();
                        }

                        if (imposto === "true") {
                            ImpostoOpt();
                        }

                        if (assistencia === "true") {
                            Assistencia();
                        }
                        if (cinst === "true") {
                            ConstInstantanea();
                        }

                    }, 5000);

                }, tempo_reload);
            });

            // ========================================================================== ABA OPÇÕES - FUNÇÕES ==========================================================================

            function AutoRefresh() {
                console.log('Atualizar Página ----> Ok')
                setTimeout(function() {
                    $('a.ui-small-icon.refresh')[0].click()
                }, 3000)
            }

            function MoverRecursos() {
                console.log('Mover Recursos ----> Ok')
                $('a.ui-icon.ui-fr.supplies.low-shake-animation')[0].click()
                setTimeout(function() {
                    xajax_doEndTransportMission('missions', {
                        missionId: 'all'
                    })
                    $('.window-wrapper.ui-draggable.active').hide()
                }, 3000)
            };

            function MoverMadeira() {
                console.log('Mover Madeira ----> Ok')
                $('a.ui-icon.ui-fr.wood.low-shake-animation')[0].click()
                setTimeout(function() {
                    xajax_doEndTransportMission('missions', {
                        missionId: 'all'
                    })
                    $('.window-wrapper.ui-draggable.active').hide()
                }, 3000);
            }

            function MoverFerro() {
                console.log('Mover Ferro ----> Ok')
                $('a.ui-icon.ui-fr.iron.low-shake-animation')[0].click()
                setTimeout(function() {
                    xajax_doEndTransportMission('missions', {
                        missionId: 'all'
                    })
                    $('.window-wrapper.ui-draggable.active').hide()
                }, 3000);
            }

            function MoverPedra() {
                console.log('Mover Pedra ----> Ok')
                $('a.ui-icon.ui-fr.stone.low-shake-animation')[0].click()

                setTimeout(function() {
                    xajax_doEndTransportMission('missions', {
                        missionId: 'all'
                    })
                    $('.window-wrapper.ui-draggable.active').hide()
                }, 3000)
            }

            function EmpregarPopulacao() {
                console.log('Empregar População ----> Ok')
                xajax_doHireWorkersAllProvinces('fast_hire', {
                    'workers': {
                        'optimal': true
                    }
                })
            }

            function Reduzir10minutos() {
                console.log('Reduzir 10 minutos ----> Ok')
                xajax_doAllBuildingCutShort('allBuildings', {})
            }

            function RecolherVassalo() {
                console.log('Recolher Vassalos ----> Ok')
                xajax_doCollectVassalGold('vassal-screen', {
                    provinceId: 11755,
                    allVassal: true
                })
            }

            function Incognito() {
                console.log('Manter Incógnito ----> Ok')
                xajax_doSetIncognito('Setting', {})
            }

            function Assistencia() {
                console.log('Assistencia ----> Ok')
                xajax_doAllBuildingCutShort('allBuildings', {})
                xajax_doGiveAssistanceAll('developmentBuilding')
                xajax_doAskForAssistance('developmentBuilding', {
                    'tab': 'economic',
                    'science': 0,
                    'developmentType': 'building'
                })
            }

            function ConstInstantanea() {
                console.log('Construçao Instantânea ----> Ok')
                xajax_doFastFinishAllDevelopments('allBuildings', {
                    'type': 'free'
                })
            }

            function ImpostoOpt() {
                console.log('Alterando o Imposto ---->')
                xajax_viewTaxList(container.open({
                    saveName: 'province_tax_rate',
                    title: 'Imposto de todos os dom%C3%ADnios'
                }))
                $('.window-wrapper.ui-draggable.active').hide()
                setTimeout(function() {
                    $('#setHappyTax').click()
                }, 2000);
            }

            $("#Pause").click(function() {
                clearInterval(e);
                GM_setValue(playerName + "ScriptStart", "false");
                f = "false";
                $("#play").css("display", "inline-block");
                $("#Pause").css("display", "none");
                e = 0;
                $("#AtaqueAudio").trigger('pause');
                $("#AtaqueAudio").prop("currentTime", 0);
                $("#AtaqueAudioAli").trigger('pause');
                $("#AtaqueAudioAli").prop("currentTime", 0);
                $("#AtaqueAudioIgnore10").trigger('pause');
                $("#AtaqueAudioIgnore10").prop("currentTime", 0);
                $("#SpyAudio").trigger('pause');
                $("#SpyAudio").prop("currentTime", 0);
                $("#MessageAudio").trigger('pause');
                $("#MessageAudio").prop("currentTime", 0);
                $("#captchaAudio").trigger('pause');
                $("#captchaAudio").prop("currentTime", 0);
            })

              // ========================================================================== DOBRAR PARA VERMELHO ========================================================================
            $("#btnDobVerm").click(function() {
                javascript:void(xajax_doChooseCard('modal',{'parentWinID': 'temple','gType':'YWYyMmEyNjI5ZmE2MWI5MzM5YjQzZTA0ZjI0MGYzN2Q=','cType':1}))

            });

            // ========================================================================== DOBRAR PARA VERMELHO ========================================================================
            $("#btnDobPreto").click(function() {
               javascript:void(xajax_doChooseCard('modal',{'parentWinID': 'temple','gType':'YWYyMmEyNjI5ZmE2MWI5MzM5YjQzZTA0ZjI0MGYzN2Q=','cType':2}))

            });



            // ========================================================================== FUNÇÃO MOVER RECURSOS ========================================================================

            $("#btnMovAll").click(function() {

                console.log('Mover todos os recursos ---->');
                xajax_viewDepotStation(container.open({
                    saveName: 'depot_station'
                }))
                $('.window-wrapper.ui-draggable.active').hide();

                setTimeout(function() {
                    $('#depot_station_all').click();

                }, 1000);

                setTimeout(function() {
                    $('#depotStationSend').click();

                }, 1500);

                setTimeout(function() {
                    $('a.button.icons.end')[0].click();
                    $('.window-wrapper.ui-draggable.active').hide();

                }, 2700);

            });

            // ==================================================================== BOTAO MOVER TROPAS ENTRE PROVINCIAS================================================================
            var movertrop = ""

            $("#Stopmovertrop").click(function() {

                $("#bntmovertrop").trigger('pause');
                $("#bntmovertrop").prop("currentTime", 0);
                $("#bntmovertrop").css("display", "block");
                $("#Stopmovertrop").css("display", "none");
                clearInterval(movertrop);
            });

            $("#bntmovertrop").click(function() {

                $("#bntmovertrop").trigger('play');
                $("#bntmovertrop").css("display", "none");
                $("#Stopmovertrop").css("display", "block");

			movertrop = function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
        var script = document.createElement("script");
        script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
        document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
// xajax_doSwitchProvince({to:'prev'});
xajax_doAssembleUnitsByGroup('','field');


document.body.style.background = 'orange';
setInterval(
function checker(){
    if(document.getElementsByClassName('incoming province')[0] != null){
    xajax_changeProvArrow(1,1)
    xajax_premiumMoveAll(2)
    xajax_doAssembleUnitsByGroup(container.open({saveName:'missions', title:'As minhas missões'})),
    document.body.style.background = 'red';
        }
    xajax_doSwitchProvince({to:'next'});
	xajax_doAssembleUnitsByGroup('','field');
    window.close('this');
  //xajax_settings(2,0,'',true)
    xajax_find_babysit(1,1);
},15000);
                })

            // ==================================================================== BOTOES ABA AÇOES ================================================================
            //=============================================================== BOTÃO MOVER RECUSOS==============================================================
            var moverrecusos = ""

            $("#Stopmoverrecusos").click(function() {

                $("#bntmoverrecusos").trigger('pause');
                $("#bntmoverrecusos").prop("currentTime", 0);
                $("#bntmoverrecusos").css("display", "block");
                $("#Stopmoverrecusos").css("display", "none");
                clearInterval(moverrecusos);
            });

            $("#bntmoverrecusos").click(function() {

                $("#bntmoverrecusos").trigger('play');
                $("#bntmoverrecusos").css("display", "none");
                $("#Stopmoverrecusos").css("display", "block");

			moverrecusos = setInterval(function(){

    void(xajax_doTransportNowByResource(container.open({saveName:'missions',title:'As minhas missões'}),{'tab': 2, 'type': 'all'}));

    setTimeout(function(){
        document.getElementsByClassName("button icons end")[0].click();
    }, 5000);

    void(container.close({saveName: 'missions', cancelCallback: true, flow: true, closedWith: 'click'}))

},15000);
            })


	//=============================================================== BOTÃO EMPREGAR POPULAÇAO==============================================================

//=============================================================== BOTÃO EMPREGAR POPULAÇAO==============================================================


			// ==================================================================== BOTOES ABA CONSTRUÇOES ================================================================

			//===============================================================BOTÃO FAZENDA==============================================================
            var fazendas = ""

            $("#StopCarregarFazendas").click(function() {

                $("#bntCarregarFazendas").trigger('pause');
                $("#bntCarregarFazendas").prop("currentTime", 0);
                $("#bntCarregarFazendas").css("display", "block");
                $("#StopCarregarFazendas").css("display", "none");
                clearInterval(fazendas);
            });

            $("#bntCarregarFazendas").click(function() {

                $("#bntCarregarFazendas").trigger('play');
                $("#bntCarregarFazendas").css("display", "none");
                $("#StopCarregarFazendas").css("display", "block");

                fazendas = setInterval(function() {
                    constroifazendas()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroifazendas()
                }

                function constroifazendas() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 6,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development6 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //=============================================================== BOTÃO CASAS ==============================================================
            var casas = ""

            $("#StopCarregarCasas").click(function() {

                $("#bntCarregarCasas").trigger('pause');
                $("#bntCarregarCasas").prop("currentTime", 0);
                $("#bntCarregarCasas").css("display", "block");
                $("#StopCarregarCasas").css("display", "none");
                clearInterval(casas);
            });

            $("#bntCarregarCasas").click(function() {

                $("#bntCarregarCasas").trigger('play');
                $("#bntCarregarCasas").css("display", "none");
                $("#StopCarregarCasas").css("display", "block");

                casas = setInterval(function() {
                    constroicasas()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroicasas()
                }

                function constroicasas() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 5,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development5 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //=============================================================== BOTÃO ESTAÇÃO DE TRANSPORTE ==============================================================
            var estacaodetransporte = ""

            $("#StopCarregarEstacaodeTransporte").click(function() {

                $("#bntCarregarEstacaodeTransporte").trigger('pause');
                $("#bntCarregarEstacaodeTransporte").prop("currentTime", 0);
                $("#bntCarregarEstacaodeTransporte").css("display", "block");
                $("#StopCarregarEstacaodeTransporte").css("display", "none");
                clearInterval(estacaodetransporte);
            });

            $("#bntCarregarEstacaodeTransporte").click(function() {

                $("#bntCarregarEstacaodeTransporte").trigger('play');
                $("#bntCarregarEstacaodeTransporte").css("display", "none");
                $("#StopCarregarEstacaodeTransporte").css("display", "block");

                estacaodetransporte = setInterval(function() {
                    constroiestacaodetransporte()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiestacaodetransporte()
                }

                function constroiestacaodetransporte() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 4,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development4 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});
            //=============================================================== BOTÃO MONUMENTOS ==============================================================
            var monumentos = ""

            $("#StopCarregarMonumentos").click(function() {

                $("#bntCarregarMonumentos").trigger('pause');
                $("#bntCarregarMonumentos").prop("currentTime", 0);
                $("#bntCarregarMonumentos").css("display", "block");
                $("#StopCarregarMonumentos").css("display", "none");
                clearInterval(monumentos);
            });

            $("#bntCarregarMonumentos").click(function() {

                $("#bntCarregarMonumentos").trigger('play');
                $("#bntCarregarMonumentos").css("display", "none");
                $("#StopCarregarMonumentos").css("display", "block");

                monumentos = setInterval(function() {
                    constroimonumentos()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroimonumentos()
                }

                function constroimonumentos() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 16,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development16 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //===============================================================BOTÃO MERCADO==============================================================
            var CarregarMercado = ""

            $("#StopCarregarMercado").click(function() {


                $("#bntCarregarMercado").trigger('pause');
                $("#bntCarregarMercado").prop("currentTime", 0);
                $("#bntCarregarMercado").css("display", "block");
                $("#StopCarregarMercado").css("display", "none");
                clearInterval(CarregarMercado);
          });

            $("#bntCarregarMercado").click(function() {

                $("#bntCarregarMercado").trigger('play');
                $("#bntCarregarMercado").css("display", "none");
                $("#StopCarregarMercado").css("display", "block");

                CarregarMercado = setInterval(function() {
                    constroimercado()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroimercado()
                }

                function constroimercado() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 10,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development10 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});


            //=============================================================== BOTÃO PRAÇA CENTRAL ==============================================================
            var praçacentral = ""

            $("#StopCarregarPraçaCentral").click(function() {

                $("#bntCarregarPraçaCentral").trigger('pause');
                $("#bntCarregarPraçaCentral").prop("currentTime", 0);
                $("#bntCarregarPraçaCentral").css("display", "block");
                $("#StopCarregarPraçaCentral").css("display", "none");
                clearInterval(praçacentral);
          });

            $("#bntCarregarPraçaCentral").click(function() {

                $("#bntCarregarPraçaCentral").trigger('play');
                $("#bntCarregarPraçaCentral").css("display", "none");
                $("#StopCarregarPraçaCentral").css("display", "block");

                praçacentral = setInterval(function(){
    // window.location.href= $(location).attr('href');
    controipraca();
},24500);
if($('#missions .outgoing.province').html() == null){
    controipraca();
}
function controipraca() {
    setTimeout(function() {
        xajax_viewBuildingList(container.open({
            'saveName': 'developmentBuilding',
            'position': 'center;center',
            'title': 'Contrução'
        }))
    }, 1000)
    setTimeout(function() {
        agora()
    }, 8500)
    setTimeout(function() {
        xajax_doSwitchProvince({
            to: 'next',
            windowSwitch: 'developmentBuilding'
        })
    }, 9500)
    };

    function agora() {
    for (let i = 0; i < 5; i++) {
    setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'economic_science',
    'developmentId': 9,
    'science': 1,
    'current_value': $('#developmentBuilding form#development9 input[name=current_value]').val()
    });
    SetFocusTop();
    return false;
    }, 5000 * i);

    };
    }});

            //=============================================================== BOTÃO SERRARIA ==============================================================
            var serraria = ""

            $("#StopCarregarSerraria").click(function() {

                $("#bntCarregarSerraria").trigger('pause');
                $("#bntCarregarSerraria").prop("currentTime", 0);
                $("#bntCarregarSerraria").css("display", "block");
                $("#StopCarregarSerraria").css("display", "none");
                clearInterval(serraria);
            });

            $("#bntCarregarSerraria").click(function() {

                $("#bntCarregarSerraria").trigger('play');
                $("#bntCarregarSerraria").css("display", "none");
                $("#StopCarregarSerraria").css("display", "block");

                serraria = setInterval(function() {
                    constroiserraria()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiserraria()
                }

                function constroiserraria() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 1,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development1 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //=============================================================== BOTÃO MINA DE FERRO ==============================================================
            var minadeferro = ""

            $("#StopCarregarMinaDeFerro").click(function() {

                $("#bntCarregarMinaDeFerro").trigger('pause');
                $("#bntCarregarMinaDeFerro").prop("currentTime", 0);
                $("#bntCarregarMinaDeFerro").css("display", "block");
                $("#StopCarregarMinaDeFerro").css("display", "none");
                clearInterval(minadeferro);
           });

            $("#bntCarregarMinaDeFerro").click(function() {

                $("#bntCarregarMinaDeFerro").trigger('play');
                $("#bntCarregarMinaDeFerro").css("display", "none");
                $("#StopCarregarMinaDeFerro").css("display", "block");

                serraria = setInterval(function() {
                    constroiminadeferro()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiminadeferro()
                }

                function constroiminadeferro() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 2,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development2 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //=============================================================== BOTÃO PEDREIRA ==============================================================
            var pedreira = ""

            $("#StopCarregarPedreira").click(function() {

                $("#bntCarregarPedreira").trigger('pause');
                $("#bntCarregarPedreira").prop("currentTime", 0);
                $("#bntCarregarPedreira").css("display", "block");
                $("#StopCarregarPedreira").css("display", "none");
                clearInterval(pedreira);
            });

            $("#bntCarregarPedreira").click(function() {

                $("#bntCarregarPedreira").trigger('play');
                $("#bntCarregarPedreira").css("display", "none");
                $("#StopCarregarPedreira").css("display", "block");

                pedreira = setInterval(function() {
                    constroipedreira()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroipedreira()
                }

                function constroipedreira() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'economic_science',
                    'developmentId': 3,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development3 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

            //=============================================================== BOTÃO ESTRADAS IMPERIAIS ==============================================================
            var estradasimperiais = ""

            $("#StopCarregarEstradasImperiais").click(function() {

                $("#bntCarregarEstradasImperiais").trigger('pause');
                $("#bntCarregarEstradasImperiais").prop("currentTime", 0);
                $("#bntCarregarEstradasImperiais").css("display", "block");
                $("#StopCarregarEstradasImperiais").css("display", "none");
                clearInterval(estradasimperiais);
            });

            $("#bntCarregarEstradasImperiais").click(function() {

                $("#bntCarregarEstradasImperiais").trigger('play');
                $("#bntCarregarEstradasImperiais").css("display", "none");
                $("#StopCarregarEstradasImperiais").css("display", "block");

                estradasimperiais = setInterval(function() {
                    constroiestradasimperiais()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiestradasimperiais()
                }

                function constroiestradasimperiais() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Estrada Imperial'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                };

                function agora() {

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 15,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5000)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 15,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 15,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 15,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 41,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5000)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 41,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 41,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 41,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 42,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5000)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 42,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 42,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 42,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 43,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5000)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 43,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 43,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 43,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 44,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5000)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 44,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 44,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)

                    setTimeout(function() {
                        xajax_doImperialRoadStart('developmentImperialRoad', {
                            'tab': 'list',
                            'developmentId': 44,
                            'science': 0,
                            'current_value': $('#developmentImperialRoad form#development41 input[name=current_value]').val()
                        });
                        SetFocusTop();
                        return false
                    }, 5900)
                }
            });

            // ==================================================================== FUNÇÕES BOTAO QUARTEL ================================================================

             var quarteis = ""

            $("#StopCarregarQuarteis").click(function() {

                $("#bntCarregarQuarteis").trigger('pause');
                $("#bntCarregarQuarteis").prop("currentTime", 0);
                $("#bntCarregarQuarteis").css("display", "block");
                $("#StopCarregarQuarteis").css("display", "none");
                clearInterval(quarteis);
            });

            $("#bntCarregarQuarteis").click(function() {

                $("#bntCarregarQuarteis").trigger('play');
                $("#bntCarregarQuarteis").css("display", "none");
                $("#StopCarregarQuarteis").css("display", "block");

                quarteis = setInterval(function() {
                    constroiquartel()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiquartel()
                }
				function constroiquartel() {
                    setTimeout(function() {
    xajax_viewBuildingList(container.open({
        'saveName': 'developmentBuilding',
        'position': 'center;center',
        'title': 'Contrução'
    }))
}, 1000)
setTimeout(function() {
    agora()
}, 8500)
setTimeout(function() {
    xajax_doSwitchProvince({
        to: 'next',
        windowSwitch: 'developmentBuilding'
    })
}, 9500)
};

function agora() {

setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'military_science',
    'developmentId': 23,
    'science': 1,
    'current_value': $('#developmentBuilding form#development23 input[name=current_value]').val()
   });
   SetFocusTop();
   return false;
}, 5000);

setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'military_science',
    'developmentId': 22,
    'science': 1,
    'current_value': $('#developmentBuilding form#development22 input[name=current_value]').val()
   });
   SetFocusTop();
   return false;
}, 5000);

setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'military_science',
    'developmentId': 24,
    'science': 1,
    'current_value': $('#developmentBuilding form#development24 input[name=current_value]').val()
   });
   SetFocusTop();
   return false;
}, 5000);

setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'military_science',
    'developmentId': 26,
    'science': 1,
    'current_value': $('#developmentBuilding form#development26 input[name=current_value]').val()
   });
   SetFocusTop();
   return false;
}, 5000);

setTimeout(function() {
    xajax_doBuildingStart('developmentBuilding', {
    'tab': 'military_science',
    'developmentId': 25,
    'science': 1,
    'current_value': $('#developmentBuilding form#development25 input[name=current_value]').val()
   });
   SetFocusTop();
   return false;
}, 5000);

}});
           



            //=============================================================== BOTÃO QUARTEL DE ARQUEIROS ==============================================================
            var quarteldearqueiro = ""

            $("#StopCarregarquarteldearqueiro").click(function() {

                $("#bntCarregarquarteldearqueiro").trigger('pause');
                $("#bntCarregarquarteldearqueiro").prop("currentTime", 0);
                $("#bntCarregarquarteldearqueiro").css("display", "block");
                $("#StopCarregarquarteldearqueiro").css("display", "none");
                clearInterval(quarteldearqueiro);
            });

            $("#bntCarregarquarteldearqueiro").click(function() {

                $("#bntCarregarquarteldearqueiro").trigger('play');
                $("#bntCarregarquarteldearqueiro").css("display", "none");
                $("#StopCarregarquarteldearqueiro").css("display", "block");

                quarteldearqueiro = setInterval(function() {
                    constroiquarteldearqueiro()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiquarteldearqueiro()
                }
				function constroiquarteldearqueiro() {
                    setTimeout(function() {
    xajax_viewBuildingList(container.open({
        'saveName': 'developmentBuilding',
        'position': 'center;center',
        'title': 'Contrução'
    }))
}, 1000)
setTimeout(function() {
    agora()
}, 8500)
setTimeout(function() {
    xajax_doSwitchProvince({
        to: 'next',
        windowSwitch: 'developmentBuilding'
    })
}, 9500)
};

function agora() {
for (let i = 0; i < 5; i++) {
setTimeout(function() {
xajax_doBuildingStart('developmentBuilding', {
'tab': 'military_science',
'developmentId': 23,
'science': 1,
'current_value': $('#developmentBuilding form#development23 input[name=current_value]').val()
});
SetFocusTop();
return false;
}, 5000 * i);

};
}});
			//=============================================================== BOTÃO QUARTEL DE INFANTARIA ==============================================================
            var quarteldeinfantaria = ""

            $("#StopCarregarquarteldeinfantaria").click(function() {

                $("#bntCarregarquarteldeinfantaria").trigger('pause');
                $("#bntCarregarquarteldeinfantaria").prop("currentTime", 0);
                $("#bntCarregarquarteldeinfantaria").css("display", "block");
                $("#StopCarregarquarteldeinfantaria").css("display", "none");
                clearInterval(quarteldeinfantaria);
            });

            $("#bntCarregarquarteldeinfantaria").click(function() {

                $("#bntCarregarquarteldeinfantaria").trigger('play');
                $("#bntCarregarquarteldeinfantaria").css("display", "none");
                $("#StopCarregarquarteldeinfantaria").css("display", "block");

                quarteldeinfantaria = setInterval(function() {
                    constroiquarteldeinfantaria()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiquarteldeinfantaria()
                }

				function constroiquarteldeinfantaria() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 22,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development22 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO QUARTEL DE CAVALARIA ==============================================================
            var quarteldecavalaria = ""

            $("#StopCarregarquarteldecavalaria").click(function() {

                $("#bntCarregarquarteldecavalaria").trigger('pause');
                $("#bntCarregarquarteldecavalaria").prop("currentTime", 0);
                $("#bntCarregarquarteldecavalaria").css("display", "block");
                $("#StopCarregarquarteldecavalaria").css("display", "none");
                clearInterval(quarteldecavalaria);
            });

            $("#bntCarregarquarteldecavalaria").click(function() {

                $("#bntCarregarquarteldecavalaria").trigger('play');
                $("#bntCarregarquarteldecavalaria").css("display", "none");
                $("#StopCarregarquarteldecavalaria").css("display", "block");

                quarteldecavalaria = setInterval(function() {
                    constroiquarteldecavalaria()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiquarteldecavalaria()
                }

				function constroiquarteldecavalaria() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 24,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development24 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO QUARTEL DE ESPIOES==============================================================
            var quarteldeespioes = ""

            $("#StopCarregarquarteldeespioes").click(function() {

                $("#bntCarregarquarteldeespioes").trigger('pause');
                $("#bntCarregarquarteldeespioes").prop("currentTime", 0);
                $("#bntCarregarquarteldeespioes").css("display", "block");
                $("#StopCarregarquarteldeespioes").css("display", "none");
                clearInterval(quarteldeespioes);
            });

            $("#bntCarregarquarteldeespioes").click(function() {

                $("#bntCarregarquarteldeespioes").trigger('play');
                $("#bntCarregarquarteldeespioes").css("display", "none");
                $("#StopCarregarquarteldeespioes").css("display", "block");

                quarteldeespioes = setInterval(function() {
                    constroiquarteldeespioes()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroiquarteldeespioes()
                }

				function constroiquarteldeespioes() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 25,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development25 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO OFICINA DE MAQUINA DE CERCO ==============================================================
            var oficinamaquinacerco = ""

            $("#StopCarregaroficinamaquinacerco").click(function() {

                $("#bntCarregaroficinamaquinacerco").trigger('pause');
                $("#bntCarregaroficinamaquinacerco").prop("currentTime", 0);
                $("#bntCarregaroficinamaquinacerco").css("display", "block");
                $("#StopCarregaroficinamaquinacerco").css("display", "none");
                clearInterval(oficinamaquinacerco);
            });

            $("#bntCarregaroficinamaquinacerco").click(function() {

                $("#bntCarregaroficinamaquinacerco").trigger('play');
                $("#bntCarregaroficinamaquinacerco").css("display", "none");
                $("#StopCarregaroficinamaquinacerco").css("display", "block");

                oficinamaquinacerco = setInterval(function() {
                    constroioficinamaquinacerco()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroioficinamaquinacerco()
                }
				function constroioficinamaquinacerco() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 26,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development26 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO CORTINA DE MURALHA ==============================================================
            var cortinademuralha = ""

            $("#StopCarregarcortinademuralha").click(function() {

                $("#bntCarregarcortinademuralha").trigger('pause');
                $("#bntCarregarcortinademuralha").prop("currentTime", 0);
                $("#bntCarregarcortinademuralha").css("display", "block");
                $("#StopCarregarcortinademuralha").css("display", "none");
                clearInterval(cortinademuralha);
            });

            $("#bntCarregarcortinademuralha").click(function() {

                $("#bntCarregarcortinademuralha").trigger('play');
                $("#bntCarregarcortinademuralha").css("display", "none");
                $("#StopCarregarcortinademuralha").css("display", "block");

                cortinademuralha = setInterval(function() {
                    constroicortinademuralha()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroicortinademuralha()
                }
				function constroicortinademuralha() {
                    ssetTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 30,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development30 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO FOSSO==============================================================
            var fosso = ""

            $("#StopCarregarfosso").click(function() {

                $("#bntCarregarfosso").trigger('pause');
                $("#bntCarregarfosso").prop("currentTime", 0);
                $("#bntCarregarfosso").css("display", "block");
                $("#StopCarregarfosso").css("display", "none");
                clearInterval(fosso);
            });

            $("#bntCarregarfosso").click(function() {

                $("#bntCarregarfosso").trigger('play');
                $("#bntCarregarfosso").css("display", "none");
                $("#StopCarregarfosso").css("display", "block");

                fosso = setInterval(function() {
                    constroifosso()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroifosso()
                }
				function constroifosso() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 29,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development29 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});

			//=============================================================== BOTÃO TORRE ==============================================================
            var torre = ""

            $("#StopCarregartorre").click(function() {

                $("#bntCarregartorre").trigger('pause');
                $("#bntCarregartorre").prop("currentTime", 0);
                $("#bntCarregartorre").css("display", "block");
                $("#StopCarregartorre").css("display", "none");
                clearInterval(torre);
            });

            $("#bntCarregartorre").click(function() {

                $("#bntCarregartorre").trigger('play');
                $("#bntCarregartorre").css("display", "none");
                $("#StopCarregartorre").css("display", "block");

                torre = setInterval(function() {
                    constroitorre()
                }, 24500);
                if ($('#missions .outgoing.province').html() == null) {
                    constroitorre()
                }
				function constroitorre() {
                    setTimeout(function() {
                        xajax_viewBuildingList(container.open({
                            'saveName': 'developmentBuilding',
                            'position': 'center;center',
                            'title': 'Contrução'
                        }))
                    }, 1000)
                    setTimeout(function() {
                        agora()
                    }, 8500)
                    setTimeout(function() {
                        xajax_doSwitchProvince({
                            to: 'next',
                            windowSwitch: 'developmentBuilding'
                        })
                    }, 9500)
                    };

                    function agora() {
                    for (let i = 0; i < 5; i++) {
                    setTimeout(function() {
                    xajax_doBuildingStart('developmentBuilding', {
                    'tab': 'military_science',
                    'developmentId': 28,
                    'science': 1,
                    'current_value': $('#developmentBuilding form#development28 input[name=current_value]').val()
                    });
                    SetFocusTop();
                    return false;
                    }, 5000 * i);

                    };
                    }});
			// ==================================================================== BOTOES ABA RECRUTAMENTOS ================================================================
            //=============================================================== BOTAO RECRUTAR ESPIOES========================================================================
            var RecEspioes = ""

            $("#StopRecEspioes").click(function() {
                $("#bntRecEspioes").trigger('pause');
                $("#bntRecEspioes").prop("currentTime", 0);
                $("#bntRecEspioes").css("display", "block");
                $("#StopRecEspioes").css("display", "none");
                clearInterval(RecEspioes);
            });

            $("#bntRecEspioes").click(function() {
                $("#bntRecEspioes").trigger('play');
                $("#bntRecEspioes").css("display", "none");
                $("#StopRecEspioes").css("display", "block");

                RecEspioes =
                // Inicia o setInterval para chamar provincias a cada 20 segundos
setInterval(function() {
    provincias();
}, 3000);

function provincias() {
    setTimeout(guardas, 1000);
    setTimeout(abretropasguardas, 3000);
    setTimeout(clicarecrutguardas, 6000);
    setTimeout(PROXIMO, 10000);

    function guardas() {
        setTimeout(function() {
            xajax_viewBarrackTabs(container.open({
                saveName: 'Espioes',
                title: 'Espioes'
            }), {
                'barrackId': '5',
                'tab': '1'
            });
        }, 850);
    }

    function abretropasguardas() {
        var unit2 = $('.icon_KS').text();
        var unit222 = $('.max_KS.barracks-K').text();
        var tropas = unit222.trim();
        var str = tropas.replace(/\s/g, '');
        if (str >= 1) {
            setTimeout(function() {
                jQuery('#train_KS').val(str.trim()).keyup();
                jQuery('#v-train_KS').val(str.trim()).keyup();
            }, 550);
        }
    }

    function clicarecrutguardas() {
        setTimeout(function() {
            $('.large-circle-buttons.neutral-confirm.fright').click();
        }, 3900);
    }

    function PROXIMO() {
        setTimeout(function() {
            xajax_doSwitchProvince({
                to: 'next',
                windowSwitch: 'spies'
            });
        }, 1000);
    }
}

            });
			//=============================================================== BOTAO ARQUEIROS LEVES========================================================================

var RecArqueirosleves = ""

            $("#StopRecArqueirosleves").click(function() {
                $("#bntRecArqueirosleves").trigger('pause');
                $("#bntRecArqueirosleves").prop("currentTime", 0);
                $("#bntRecArqueirosleves").css("display", "block");
                $("#StopRecArqueirosleves").css("display", "none");
                clearInterval(RecArqueirosleves);
            });

            $("#bntRecArqueirosleves").click(function() {
                $("#bntRecArqueirosleves").trigger('play');
                $("#bntRecArqueirosleves").css("display", "none");
                $("#StopRecArqueirosleves").css("display", "block");

                RecArqueirosleves = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(arcosl, 1000);
                    setTimeout(abretropasarcosl, 3000);
                    setTimeout(clicarecrutarcosl, 6000);
                    setTimeout(PROXIMO, 10000);

                    function arcosl() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'archer',
                                title: 'Quartel de Arqueiros'
                            }), {
                                'barrackId': '1',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasarcosl() {
                        var unit2 = $('.icon_S1').text();
                        var unit222 = $('.max_S1.barracks-S').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_S1').val(str.trim()).keyup();
                                jQuery('#v-train_S1').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutarcosl() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'archer'
                            });
                        }, 1000);
                    }
                }

                            });
			//=============================================================== BOTAO RECRUTAR ESPADAS LEVES========================================================================

var RecEspadachimLeves = ""

            $("#StopRecEspadachimLeves").click(function() {
                $("#bntRecEspadachimLeves").trigger('pause');
                $("#bntRecEspadachimLeves").prop("currentTime", 0);
                $("#bntRecEspadachimLeves").css("display", "block");
                $("#StopRecEspadachimLeves").css("display", "none");
                clearInterval(RecEspadachimLeves);
            });

            $("#bntRecEspadachimLeves").click(function() {
                $("#bntRecEspadachimLeves").trigger('play');
                $("#bntRecEspadachimLeves").css("display", "none");
                $("#StopRecEspadachimLeves").css("display", "block");

                RecEspadachimLeves = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(espadasl, 1000);
                    setTimeout(abretropasespadal, 3000);
                    setTimeout(clicarecrutespadal, 6000);
                    setTimeout(PROXIMO, 10000);

                    function espadasl() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'archer',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasespadal() {
                        var unit2 = $('.icon_M1').text();
                        var unit222 = $('.max_M1.barracks-M').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_M1').val(str.trim()).keyup();
                                jQuery('#v-train_M1').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutespadal() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });


			//=============================================================== BOTAO RECRUTAR LANCEIROS LEVES========================================================================

var Reclanceirosleves = ""

            $("#StopReclanceirosleves").click(function() {
                $("#bntReclanceirosleves").trigger('pause');
                $("#bntReclanceirosleves").prop("currentTime", 0);
                $("#bntReclanceirosleves").css("display", "block");
                $("#StopReclanceirosleves").css("display", "none");
                clearInterval(Reclanceirosleves);
            });

            $("#bntReclanceirosleves").click(function() {
                $("#bntReclanceirosleves").trigger('play');
                $("#bntReclanceirosleves").css("display", "none");
                $("#StopReclanceirosleves").css("display", "block");

                Reclanceirosleves =  // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(lançal, 1000);
                    setTimeout(abretropaslançal, 3000);
                    setTimeout(clicarecrutlançal, 6000);
                    setTimeout(PROXIMO, 10000);

                    function lançal() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropaslançal() {
                        var unit2 = $('.icon_P1').text();
                        var unit222 = $('.max_P1.barracks-P').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_P1').val(str.trim()).keyup();
                                jQuery('#v-train_P1').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutlançal() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO RECRUTAR CAVALOS LEVES========================================================================

var RecCavalosleves = ""

            $("#StopRecCavalosleves").click(function() {
                $("#bntRecCavalosleves").trigger('pause');
                $("#bntRecCavalosleves").prop("currentTime", 0);
                $("#bntRecCavalosleves").css("display", "block");
                $("#StopRecCavalosleves").css("display", "none");
                clearInterval(RecCavalosleves);
            });

            $("#bntRecCavalosleves").click(function() {
                $("#bntRecCavalosleves").trigger('play');
                $("#bntRecCavalosleves").css("display", "none");
                $("#StopRecCavalosleves").css("display", "block");

                RecCavalosleves = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(cavl, 1000);
                    setTimeout(abretropascavl, 3000);
                    setTimeout(clicarecrutcavl, 6000);
                    setTimeout(PROXIMO, 10000);

                    function cavl() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'cavalery',
                                title: 'Quartel de Cavalaria'
                            }), {
                                'barrackId': '3',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropascavl() {
                        var unit2 = $('.icon_K1').text();
                        var unit222 = $('.max_K1.barracks-K').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_K1').val(str.trim()).keyup();
                                jQuery('#v-train_K1').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutcavl() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'cavalery'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO RECRUTAR PESADOS=======================================================================


			//=============================================================== BOTAO ARQUEIROS PESADOS========================================================================

var RecArqueirospesados = ""

            $("#StopRecArqueirospesados").click(function() {
                $("#bntRecArqueirospesados").trigger('pause');
                $("#bntRecArqueirospesados").prop("currentTime", 0);
                $("#bntRecArqueirospesados").css("display", "block");
                $("#StopRecArqueirospesados").css("display", "none");
                clearInterval(RecArqueirospesados);
            });

            $("#bntRecArqueirospesados").click(function() {
                $("#bntRecArqueirospesados").trigger('play');
                $("#bntRecArqueirospesados").css("display", "none");
                $("#StopRecArqueirospesados").css("display", "block");

                RecArqueirospesados = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(arcosp, 1000);
                    setTimeout(abretropasarcosp, 3000);
                    setTimeout(clicarecrutarcosp, 6000);
                    setTimeout(PROXIMO, 10000);

                    function arcosp() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'archer',
                                title: 'Quartel de Arqueiros'
                            }), {
                                'barrackId': '1',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasarcosp() {
                        var unit2 = $('.icon_S2').text();
                        var unit222 = $('.max_S2.barracks-S').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_S2').val(str.trim()).keyup();
                                jQuery('#v-train_S2').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutarcosp() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'archer'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO ESPADAS PESADOS========================================================================

var RecEspadachimPesado = ""

            $("#StopRecEspadachimPesado").click(function() {
                $("#bntRecEspadachimPesado").trigger('pause');
                $("#bntRecEspadachimPesado").prop("currentTime", 0);
                $("#bntRecEspadachimPesado").css("display", "block");
                $("#StopRecEspadachimPesado").css("display", "none");
                clearInterval(RecEspadachimPesado);
            });

            $("#bntRecEspadachimPesado").click(function() {
                $("#bntRecEspadachimPesado").trigger('play');
                $("#bntRecEspadachimPesado").css("display", "none");
                $("#StopRecEspadachimPesado").css("display", "block");

                RecEspadachimPesado = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(espadasp, 1000);
                    setTimeout(abretropasespadap, 3000);
                    setTimeout(clicarecrutespadap, 6000);
                    setTimeout(PROXIMO, 10000);

                    function espadasp() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasespadap() {
                        var unit2 = $('.icon_M2').text();
                        var unit222 = $('.max_M2.barracks-M').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_M2').val(str.trim()).keyup();
                                jQuery('#v-train_M2').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutespadap() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO LANCEIROS PESADOS========================================================================

var Reclanceirospesados = ""

            $("#StopReclanceirospesados").click(function() {
                $("#bntReclanceirospesados").trigger('pause');
                $("#bntReclanceirospesados").prop("currentTime", 0);
                $("#bntReclanceirospesados").css("display", "block");
                $("#StopReclanceirospesados").css("display", "none");
                clearInterval(Reclanceirospesados);
            });

            $("#bntReclanceirospesados").click(function() {
                $("#bntReclanceirospesados").trigger('play');
                $("#bntReclanceirospesados").css("display", "none");
                $("#StopReclanceirospesados").css("display", "block");

                Reclanceirospesados =   // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(lançap, 1000);
                    setTimeout(abretropaslançap, 3000);
                    setTimeout(clicarecrutlançap, 6000);
                    setTimeout(PROXIMO, 10000);

                    function lançap() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropaslançap() {
                        var unit2 = $('.icon_P2').text();
                        var unit222 = $('.max_P2.barracks-P').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_P2').val(str.trim()).keyup();
                                jQuery('#v-train_P2').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutlançap() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });


			//=============================================================== BOTAO CAVALOS PESADOS========================================================================

var RecCavalospesados = ""

            $("#StopRecCavalospesados").click(function() {
                $("#bntRecCavalospesados").trigger('pause');
                $("#bntRecCavalospesados").prop("currentTime", 0);
                $("#bntRecCavalospesados").css("display", "block");
                $("#StopRecCavalospesados").css("display", "none");
                clearInterval(RecCavalospesados);
            });

            $("#bntRecCavalospesados").click(function() {
                $("#bntRecCavalospesados").trigger('play');
                $("#bntRecCavalospesados").css("display", "none");
                $("#StopRecCavalospesados").css("display", "block");

                RecCavalospesados = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(cavp, 1000);
                    setTimeout(abretropascavp, 3000);
                    setTimeout(clicarecrutcavp, 6000);
                    setTimeout(PROXIMO, 10000);

                    function cavp() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'cavalery',
                                title: 'Quartel de Cavalaria'
                            }), {
                                'barrackId': '3',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropascavp() {
                        var unit2 = $('.icon_K2').text();
                        var unit222 = $('.max_K2.barracks-K').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_K2').val(str.trim()).keyup();
                                jQuery('#v-train_K2').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutcavp() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'cavalery'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO RECRUTAR ELITES========================================================================


			//=============================================================== BOTAO RECRUTAR GUARDIOES========================================================================

var RecGuardioes = ""

            $("#StopRecGuardioes").click(function() {
                $("#bntRecGuardioes").trigger('pause');
                $("#bntRecGuardioes").prop("currentTime", 0);
                $("#bntRecGuardioes").css("display", "block");
                $("#StopRecGuardioes").css("display", "none");
                clearInterval(RecGuardioes);
            });

            $("#bntRecGuardioes").click(function() {
                $("#bntRecGuardioes").trigger('play');
                $("#bntRecGuardioes").css("display", "none");
                $("#StopRecGuardioes").css("display", "block");

                RecGuardioes =// Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(espadase, 1000);
                    setTimeout(abretropasespadae, 3000);
                    setTimeout(clicarecrutespadae, 6000);
                    setTimeout(PROXIMO, 10000);

                    function espadase() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasespadae() {
                        var unit2 = $('.icon_M3').text();
                        var unit222 = $('.max_M3.barracks-M').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_M3').val(str.trim()).keyup();
                                jQuery('#v-train_M3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutespadae() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTAO RECRUTAR FALANGES========================================================================
var RecFalanges = ""

            $("#StopRecFalanges").click(function() {
                $("#bntRecFalanges").trigger('pause');
                $("#bntRecFalanges").prop("currentTime", 0);
                $("#bntRecFalanges").css("display", "block");
                $("#StopRecFalanges").css("display", "none");
                clearInterval(RecFalanges);
            });

            $("#bntRecFalanges").click(function() {
                $("#bntRecFalanges").trigger('play');
                $("#bntRecFalanges").css("display", "none");
                $("#StopRecFalanges").css("display", "block");

                RecFalanges =  // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(lançae, 1000);
                    setTimeout(abretropaslançae, 3000);
                    setTimeout(clicarecrutlançae, 6000);
                    setTimeout(PROXIMO, 10000);

                    function lançae() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropaslançae() {
                        var unit2 = $('.icon_P3').text();
                        var unit222 = $('.max_P3.barracks-P').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_P3').val(str.trim()).keyup();
                                jQuery('#v-train_P3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutlançae() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });

			            //=============================================================== BOTAO RECRUTAR PALADINOS========================================================================
            var RecPaladinos = ""

            $("#StopRecPaladinos").click(function() {
                $("#bntRecPaladinos").trigger('pause');
                $("#bntRecPaladinos").prop("currentTime", 0);
                $("#bntRecPaladinos").css("display", "block");
                $("#StopRecPaladinos").css("display", "none");
                clearInterval(RecPaladinos);
            });

            $("#bntRecPaladinos").click(function() {
                $("#bntRecPaladinos").trigger('play');
                $("#bntRecPaladinos").css("display", "none");
                $("#StopRecPaladinos").css("display", "block");

                RecPaladinos = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(cave, 1000);
                    setTimeout(abretropascave, 3000);
                    setTimeout(clicarecrutcave, 6000);
                    setTimeout(PROXIMO, 10000);

                    function cave() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'cavalery',
                                title: 'Quartel de Cavalaria'
                            }), {
                                'barrackId': '3',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropascave() {
                        var unit2 = $('.icon_K3').text();
                        var unit222 = $('.max_K3.barracks-K').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_K3').val(str.trim()).keyup();
                                jQuery('#v-train_K3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutcave() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'cavalery'
                            });
                        }, 1000);
                    }
                }

                            });
			            //=============================================================== BOTAO RECRUTAR ARQUEIRO========================================================================
            var RecArqueiros = ""

            $("#StopRecArqueiros").click(function() {
                $("#bntRecArqueiros").trigger('pause');
                $("#bntRecArqueiros").prop("currentTime", 0);
                $("#bntRecArqueiros").css("display", "block");
                $("#StopRecArqueiros").css("display", "none");
                clearInterval(RecArqueiros);
            });

            $("#bntRecArqueiros").click(function() {
                $("#bntRecArqueiros").trigger('play');
                $("#bntRecArqueiros").css("display", "none");
                $("#StopRecArqueiros").css("display", "block");

                RecArqueiros = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(arcose, 1000);
                    setTimeout(abretropasarcose, 3000);
                    setTimeout(clicarecrutarcose, 6000);
                    setTimeout(PROXIMO, 10000);

                    function arcose() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'archer',
                                title: 'Quartel de Arqueiros'
                            }), {
                                'barrackId': '1',
                                'tab': '1'
                            });
                        }, 850);
                    }

                    function abretropasarcose() {
                        var unit2 = $('.icon_S3').text();
                        var unit222 = $('.max_S3.barracks-S').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_S3').val(str.trim()).keyup();
                                jQuery('#v-train_S3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutarcose() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'archer'
                            });
                        }, 1000);
                    }
                }

                            });


			//=============================================================== BOTÃO EVOLUIR ARQUEIRO ==============================================================

var Evoarqueiroselite = ""

            $("#StopEvoarqueiroselite").click(function() {
                $("#bntEvoarqueiroselite").trigger('pause');
                $("#bntEvoarqueiroselite").prop("currentTime", 0);
                $("#bntEvoarqueiroselite").css("display", "block");
                $("#StopEvoarqueiroselite").css("display", "none");
                clearInterval(Evoarqueiroselite);
            });

            $("#bntEvoarqueiroselite").click(function() {
                $("#bntEvoarqueiroselite").trigger('play');
                $("#bntEvoarqueiroselite").css("display", "none");
                $("#StopEvoarqueiroselite").css("display", "block");

                Evoarqueiroselite = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(arcose, 1000);
                    setTimeout(abretropasarcose, 3000);
                    setTimeout(clicarecrutarcose, 6000);
                    setTimeout(PROXIMO, 10000);

                    function arcose() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'archer',
                                title: 'Quartel de Arqueiros'
                            }), {
                                'barrackId': '1',
                                'tab': '4'
                            });
                        }, 850);
                    }

                    function abretropasarcose() {
                        var unit2 = $('.icon_S3').text();
                        var unit222 = $('.max_S3').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_S3').val(str.trim()).keyup();
                                jQuery('#v-train_S3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutarcose() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'archer'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTÃO EVOLUIR GUARDIOES ==============================================================

var Evoguardaselite = ""

            $("#StopEvoguardaselite").click(function() {
                $("#bntEvoguardaselite").trigger('pause');
                $("#bntEvoguardaselite").prop("currentTime", 0);
                $("#bntEvoguardaselite").css("display", "block");
                $("#StopEvoguardaselite").css("display", "none");
                clearInterval(Evoguardaselite);
            });

            $("#bntEvoguardaselite").click(function() {
                $("#bntEvoguardaselite").trigger('play');
                $("#bntEvoguardaselite").css("display", "none");
                $("#StopEvoguardaselite").css("display", "block");

                Evoguardaselite = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(espadase, 1000);
                    setTimeout(abretropasespadae, 3000);
                    setTimeout(clicarecrutespadae, 6000);
                    setTimeout(PROXIMO, 10000);

                    function espadase() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '4'
                            });
                        }, 850);
                    }

                    function abretropasespadae() {
                        var unit2 = $('.icon_M3').text();
                        var unit222 = $('.max_M3').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_M3').val(str.trim()).keyup();
                                jQuery('#v-train_M3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutespadae() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });
			//=============================================================== BOTÃO EVOLUIR FALANGES ==============================================================

var EvoFalangeselite = ""

            $("#StopEvoFalangeselite").click(function() {
                $("#bntEvoFalangeselite").trigger('pause');
                $("#bntEvoFalangeselite").prop("currentTime", 0);
                $("#bntEvoFalangeselite").css("display", "block");
                $("#StopEvoFalangeselite").css("display", "none");
                clearInterval(EvoFalangeselite);
            });

            $("#bntEvoFalangeselite").click(function() {
                $("#bntEvoFalangeselite").trigger('play');
                $("#bntEvoFalangeselite").css("display", "none");
                $("#StopEvoFalangeselite").css("display", "block");

                EvoFalangeselite = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(lançae, 1000);
                    setTimeout(abretropaslançae, 3000);
                    setTimeout(clicarecrutlançae, 6000);
                    setTimeout(PROXIMO, 10000);

                    function lançae() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'infantry',
                                title: 'Quartel de Infantaria'
                            }), {
                                'barrackId': '2',
                                'tab': '4'
                            });
                        }, 850);
                    }

                    function abretropaslançae() {
                        var unit2 = $('.icon_P3').text();
                        var unit222 = $('.max_P3').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_P3').val(str.trim()).keyup();
                                jQuery('#v-train_P3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutlançae() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'infantry'
                            });
                        }, 1000);
                    }
                }

                            });

			//=============================================================== BOTÃO EVOLUIR PALADINOS ==============================================================

var Evocavaloselite = ""

            $("#StopEvocavaloselite").click(function() {
                $("#bntEvocavaloselite").trigger('pause');
                $("#bntEvocavaloselite").prop("currentTime", 0);
                $("#bntEvocavaloselite").css("display", "block");
                $("#StopEvocavaloselite").css("display", "none");
                clearInterval(Evocavaloselite);
            });

            $("#bntEvocavaloselite").click(function() {
                $("#bntEvocavaloselite").trigger('play');
                $("#bntEvocavaloselite").css("display", "none");
                $("#StopEvocavaloselite").css("display", "block");

                Evocavaloselite = // Inicia o setInterval para chamar provincias a cada 20 segundos
                setInterval(function() {
                    provincias();
                }, 3000);

                function provincias() {
                    setTimeout(cave, 1000);
                    setTimeout(abretropascave, 3000);
                    setTimeout(clicarecrutcave, 6000);
                    setTimeout(PROXIMO, 10000);

                    function cave() {
                        setTimeout(function() {
                            xajax_viewBarrackTabs(container.open({
                                saveName: 'cavalery',
                                title: 'Quartel de Cavalaria'
                            }), {
                                'barrackId': '3',
                                'tab': '4'
                            });
                        }, 850);
                    }

                    function abretropascave() {
                        var unit2 = $('.icon_K3').text();
                        var unit222 = $('.max_K3').text();
                        var tropas = unit222.trim();
                        var str = tropas.replace(/\s/g, '');
                        if (str >= 1) {
                            setTimeout(function() {
                                jQuery('#train_K3').val(str.trim()).keyup();
                                jQuery('#v-train_K3').val(str.trim()).keyup();
                            }, 550);
                        }
                    }

                    function clicarecrutcave() {
                        setTimeout(function() {
                            $('.large-circle-buttons.neutral-confirm.fright').click();
                        }, 3900);
                    }

                    function PROXIMO() {
                        setTimeout(function() {
                            xajax_doSwitchProvince({
                                to: 'next',
                                windowSwitch: 'cavalery'
                            });
                        }, 1000);
                    }
                }

                            });

//=============================================================== BOTÃO EVOLUIR PARA ELITES ==============================================================

var Evoelite = "";

$("#StopEvoelite").click(function() {
    $("#bntEvoelite").trigger('pause');
    $("#bntEvoelite").prop("currentTime", 0);
    $("#bntEvoelite").css("display", "block");
    $("#StopEvoelite").css("display", "none");
    clearInterval(Evoelite);
});

$("#bntEvoelite").click(function() {
    $("#bntEvoelite").trigger('play');
    $("#bntEvoelite").css("display", "none");
    $("#StopEvoelite").css("display", "block");

    Evoelite = setInterval(function() {
        makeFlashAction({'action':'viewPalace','saveName':'Palace','title':'Palace'});
        xajax_viewPalace('Palace', {'tab': 2});
        setTimeout(getItemsCount.bind(undefined, upgradeArchers), 5000); // Aumentei para 5 segundos
    }, 20000);  // Aumentei para 20 segundos
});

var itemsCount;

function getItemsCount(myCallback) {
    var len = $('.gp-card-location.tooltip-arrow.ui-pass').length;
    for (let i = len - 1; i >= 0; i--) {
        var item = $('.gp-card-location.tooltip-arrow.ui-pass').eq(i).attr('content');
        if (item.includes('province') || item.includes('colony')) {
            itemsCount = i + 1;
            break;
        }
    }
    myCallback(upgradeHorses);
}

function upgradeArchers(myCallback) {
    makeFlashAction({'action':'viewBarrackTabs','saveName':'archer','title':'Archery Barracks','params':{'barrackId': 1}});
    xajax_viewBarrackTabs('archer', {'barrackId': '1', 'tab': '4'});

    for (let i = 0; i < itemsCount; i++) {
        setTimeout(function() {
            xajax_doUpgrade('archer', { unit: 'S3', amount: parseInt($('.max_S3').text().replace(/\s/g, "")) });
            xajax_doSwitchProvince({ to: 'next', windowSwitch: 'archer' });
        }, i * 3000); // Aumentei para 3 segundos
    }

    setTimeout(myCallback.bind(undefined, upgradeInfantry), itemsCount * 3000 + 5000); // Ajustei os tempos de acordo
}

function upgradeHorses(myCallback) {
    makeFlashAction({'action':'viewBarrackTabs','saveName':'cavalry','title':'Cavalry Barracks','params':{'barrackId': 3}});
    xajax_viewBarrackTabs('cavalry', {'barrackId': '3', 'tab': '4'});

    for (let i = 0; i < itemsCount; i++) {
        setTimeout(function() {
            xajax_doUpgrade('cavalry', { unit: 'K3', amount: parseInt($('.max_K3').text().replace(/\s/g, "")) });
            xajax_doSwitchProvince({ to: 'next', windowSwitch: 'cavalry' });
        }, i * 3000); // Aumentei para 3 segundos
    }

    setTimeout(myCallback, itemsCount * 3000 + 5000); // Ajustei os tempos de acordo
}

function upgradeInfantry() {
    makeFlashAction({'action':'viewBarrackTabs','saveName':'infantry','title':'Infantry Barracks','params':{'barrackId': 2}});
    xajax_viewBarrackTabs('infantry', {'barrackId': '2', 'tab': '4'});

    for (let i = 0; i < itemsCount; i++) {
        setTimeout(function() {
            xajax_doUpgrade('infantry', { unit: 'M3', amount: parseInt($('.max_M3').text().replace(/\s/g, "")) });
            xajax_doUpgrade('infantry', { unit: 'P3', amount: parseInt($('.max_P3').text().replace(/\s/g, "")) });
            xajax_doSwitchProvince({ to: 'next', windowSwitch: 'infantry' });
        }, i * 4000); // Aumentei para 4 segundos
    }
}




// ==================================================================== BOTOES ABA EVENTOS ================================================================

//=============================================================== FUNÇÃO ATACAR EVENTOS =======================================================================

            function AtacarEventos() {

                if ($(".mission-my").length > 0) {
                    console.log('Aguardando Chegada de Tropas ---->');
                } else
                    setTimeout(function() {
                        xajax_viewOperationCenter(container.open({
                            saveName: 'operation-center',
                            title: 'Centro de Comando'
                        }), {
                            'tab': 'attack',
                            'userId': "3001"
                        });
                        $('.window-wrapper.ui-draggable.active').hide();
                        setTimeout(function() {
                            console.log('Evento ativo, enviando ataque----> OK');
                            $('a#select-all-army').click();
                        }, 2000);
                        setTimeout(function() {
                            siegeAttackCheck('$(\'#attackType\').val(\'1\'); xajax_doAttack(\'OperationCenter\', xajax.getFormValues(\'sendAttackForm\'));');
                            $('.window-wrapper.ui-draggable.active').hide();
                        }, 2500);
                        setTimeout(function() {
                            (container.close({
                                saveName: 'missions',
                                cancelCallback: true,
                                flow: true,
                                closedWith: 'click'
                            }));
                            $('.window-wrapper.ui-draggable.active').hide();
                        }, 3500);
                        setTimeout(function() {
                            (container.close({
                                saveName: 'terminalError',
                                cancelCallback: true,
                                flow: true,
                                closedWith: 'click'
                            }));
                            $('.window-wrapper.ui-draggable.active').hide();
                        }, 4500);
                    }, 2000);
            }

//=============================================================== BOTAO ATACAR FORTALEZA========================================================================
            var AtkFortaleza = ""

            $("#StopAtkFortaleza").click(function() {
                $("#bntAtkFortaleza").trigger('pause');
                $("#bntAtkFortaleza").prop("currentTime", 0);
                $("#bntAtkFortaleza").css("display", "block");
                $("#StopAtkFortaleza").css("display", "none");
                clearInterval(AtkFortaleza);
            })

            $("#bntAtkFortaleza").click(function() {
                $("#bntAtkFortaleza").trigger('play');
                $("#bntAtkFortaleza").css("display", "none");
                $("#StopAtkFortaleza").css("display", "block");

                console.log('Inciando Script Fortaleza das Trevas ---->');

                AtkFortaleza = setInterval(function() {
                    if ($(".ui-ftimer.countdown.stopSeconds.toHours").length > 0) {
                        if ($('.clock').text() > "17:00:00") {
                            if ($('.clock').text() < "23:59:59") {
                                javascript: refreshUI('Atualizar');
                                AtacarEventos();
                            }
                        }
                    }
                    if ($('.clock').text() < "17:00:00") {
                        console.log('Aguardando Inicio da Fortaleza ---->');
                    }
                }, 6000)

            })

//=============================================================== BOTAO ATACAR PRISAO========================================================================
            var AtkPrisao = ""

            $("#StopAtkPrisao").click(function() {
                $("#bntAtkPrisao").trigger('pause');
                $("#bntAtkPrisao").prop("currentTime", 0);
                $("#bntAtkPrisao").css("display", "block");
                $("#StopAtkPrisao").css("display", "none");
                clearInterval(AtkPrisao);
            });

            $("#bntAtkPrisao").click(function() {
                $("#bntAtkPrisao").trigger('play');
                $("#bntAtkPrisao").css("display", "none");
                $("#StopAtkPrisao").css("display", "block");

                console.log('Inciando Script Atacar Prisão de Pedra ---->');

                AtkPrisao = setInterval(function() {
                    if ($(".ui-ftimer.countdown.stopSeconds.toHours").length > 0) {
                        if ($('.clock').text() > "17:00:00") {
                            if ($('.clock').text() < "23:59:59") {
                                javascript: refreshUI('Atualizar');
                                AtacarEventos();
                            }
                        }
                    }
                    if ($('.clock').text() < "17:00:00") {
                        console.log('Aguardando Inicio da Prisão ---->');
                    }
                }, 6000);

            })

//=============================================================== BOTAO ATACAR CRANIO ========================================================================
            var AtkCranio = ""

            $("#StopAtkCranio").click(function() {
                $("#bntAtkCranio").trigger('pause');
                $("#bntAtkCranio").prop("currentTime", 0);
                $("#bntAtkCranio").css("display", "block");
                $("#StopAtkCranio").css("display", "none");
                clearInterval(AtkCranio);
            });


            $("#bntAtkCranio").click(function() {
                $("#bntAtkCranio").trigger('play');
                $("#bntAtkCranio").css("display", "none");
                $("#StopAtkCranio").css("display", "block");

                console.log('Inciando Script Atacar Crânio ---->');

                AtkCranio = setInterval(function() {
                    if ($(".ui-ftimer.countdown.stopSeconds.toHours").length > 0) {
                        if ($('.clock').text() > "17:00:00") {
                            if ($('.clock').text() < "23:59:59") {
                                javascript: refreshUI('Atualizar');
                                AtacarEventos();
                            }
                        }
                    }
                    if ($('.clock').text() < "17:00:00") {
                        console.log('Aguardando Inicio do Crânio ---->');
                    }
                }, 6000);

            })
            // ==================================================================== BOTOES ABA ESPECIALIZAÇÕES ================================================================
            // ==================================================================== BOTOES ABA DOBRO ================================================================
            // ==================================================================== BOTOES ABA PESQUISA ================================================================


            // ==================================================================== BOTOES ABA EXTRAS ================================================================

//========================================================== BOTAO ATACAR CAVERNA DA CONQUISTA ==============================================================
            var AtkCaverna = ""

            $("#StopAtkCaverna").click(function() {
                $("#bntAtkCaverna").trigger('pause');
                $("#bntAtkCaverna").prop("currentTime", 0);
                $("#bntAtkCaverna").css("display", "block");
                $("#StopAtkCaverna").css("display", "none");
                clearInterval(AtkCaverna);
            });


            $("#bntAtkCaverna").click(function() {
                $("#bntAtkCaverna").trigger('play');
                $("#bntAtkCaverna").css("display", "none");
                $("#StopAtkCaverna").css("display", "block");

                console.log('Inciando Script Atacar Caverna da Conquista ---->');

                AtkCaverna = setInterval(function(){

            Atacar_Cav_Conquista();


},6000);


// -------------------------------------------------------------------------------------------------------------------------------------------------

function Atacar_Cav_Conquista() {

    if ($(".mission-my").length > 0){
        console.log('Aguardando Chegada de Tropas ---->');
    }
    else

        setTimeout(function(){

            xajax_viewOperationCenter(container.open({saveName: 'operation-center', title: 'Centro de Comando'}), {'tab':'attack','userId':"5001"});
            $('.window-wrapper.ui-draggable.active').hide();
            setTimeout(function(){

                console.log('Caverna da Conquista, enviando ataque----> OK');
                $('a#select-all-army').click();

            },2000);

            setTimeout(function(){
                siegeAttackCheck('$(\'#attackType\').val(\'1\'); xajax_doAttack(\'OperationCenter\', xajax.getFormValues(\'sendAttackForm\'));');
                $('.window-wrapper.ui-draggable.active').hide();
            },2500);

            setTimeout(function(){
                (container.close({saveName: 'missions', cancelCallback: true, flow: true, closedWith: 'click'}));
                $('.window-wrapper.ui-draggable.active').hide();
            },3500);
            setTimeout(function(){
                (container.close({saveName: 'terminalError', cancelCallback: true, flow: true, closedWith: 'click'}));
                $('.window-wrapper.ui-draggable.active').hide();

            },4500);
        },2000);
}
            })



            //========================================================== BOTAO ATACAR CAVERNA DA CONQUISTA ==============================================================
            var AtkCavernainst = ""

            $("#StopAtkCavernainst").click(function() {
                $("#bntAtkCavernainst").trigger('pause');
                $("#bntAtkCavernainst").prop("currentTime", 0);
                $("#bntAtkCavernainst").css("display", "block");
                $("#StopAtkCavernainst").css("display", "none");
                clearInterval(AtkCavernainst);
            });


            $("#bntAtkCavernainst").click(function() {
                $("#bntAtkCavernainst").trigger('play');
                $("#bntAtkCavernainst").css("display", "none");
                $("#StopAtkCavernainst").css("display", "block");

                console.log('Inciando Script Atacar Caverna da Conquista ---->');

                AtkCavernainst = setInterval(function(){

            Atacar_Cav_Conquista();


},6000);


// -------------------------------------------------------------------------------------------------------------------------------------------------

function Atacar_Cav_Conquista() {

    if ($(".mission-my").length > 0){
        console.log('Aguardando Chegada de Tropas ---->');
    }
    else

        setTimeout(function(){

            xajax_doUserDungeonBuyAndAttack(container.open({saveName: 'operation-center', title: 'Centro de Comando'}), {'tab':'attack','userId':"5001"});
            $('.window-wrapper.ui-draggable.active').hide();
            setTimeout(function(){

                console.log('Caverna da Conquista, enviando ataque----> OK');
                $('a#select-all-army').click();

            },2000);

            setTimeout(function(){
                siegeAttackCheck('$(\'#attackType\').val(\'1\'); xajax_doAttack(\'OperationCenter\', xajax.getFormValues(\'sendAttackForm\'));');
                $('.window-wrapper.ui-draggable.active').hide();
            },2500);

            setTimeout(function(){
                (container.close({saveName: 'missions', cancelCallback: true, flow: true, closedWith: 'click'}));
                $('.window-wrapper.ui-draggable.active').hide();
            },3500);
            setTimeout(function(){
                (container.close({saveName: 'terminalError', cancelCallback: true, flow: true, closedWith: 'click'}));
                $('.window-wrapper.ui-draggable.active').hide();

            },4500);
        },2000);
}
            })
//=================================================== FUNÇÃO LOOP TREINOS DE GENERAIS E GOVERNADORES =======================================================

  function loop_50x() {
    console.log('Iniciando Repetição----> Ok');
    let uGov = +prompt('Quantos treinos deseja executar? (até 50)');

    for (let i = 0; i < 50; i++) {
        if (i === uGov) {
            break;
        }

        (function (i) {
            console.log("Função Repetir " + i + " ----> Ok");
            setTimeout(function () {
                console.log("Treino n. " + i);

                setTimeout(function(){
                    console.log('Clica no botão + para selecionar Nobre-> OK');
                    $('.gp-icons.add.addPerson')[0].click()
                }, 3000)

                setTimeout(function(){
                    console.log('Clica no primeiro Quadro de Treino ----> OK');
                    $('.gp-card.empty.holding-num-0-0.s84.emptyHolding.selected')[0].click()
                }, 6000)

                setTimeout(function(){
                    console.log('Clica no botão Treinamento ----> OK');
                    $('.centered-block.visual-loading.fnone .button.blue')[0].click()
                }, 8000)

                setTimeout(function(){
                    console.log('Paga o treinamento ----> OK');
                    $('.button.small.monetization')[0].click()
                }, 10000)

            }, 13000*i);
        })(i);
    }
}

//=============================================================== BOTAO 50 TREINOS GOVERNADOR========================================================================
var TreinoGov_ = ""

            $("#StopTreinoGov").click(function() {
                $("#bntTreinoGov").trigger('pause');
                $("#bntTreinoGov").prop("currentTime", 0);
                $("#bntTreinoGov").css("display", "block");
                $("#StopTreinoGov").css("display", "none");
                clearInterval(TreinoGov);
            });


            $("#bntTreinoGov").click(function() {
                $("#bntTreinoGov").trigger('play');
                $("#bntTreinoGov").css("display", "none");
                $("#StopTreinoGov").css("display", "block");

              TreinoGov_ =    console.log('Iniciar Treino dos Generais ----> OK');

                setTimeout(function tgov(){

   console.log('Abre o Teclado ----> OK');
    $('.ui-small-icon.hot-keys')[0].click()

setTimeout(function(){

   console.log('Abrindo Palácio ----> OK');
    $('.hotkey.palace.ui-ib')[0].click()
    },4000)

setTimeout(function(){

   console.log('Vai para o treino de Governadores ----> OK');
    xajax_viewPalace('Palace', {tab:'2', subTab:'training'})
    },6000)

setTimeout(function(){

   console.log('Iniciar Repetição ----> OK');
   loop_50x()
    },7000)

    },3000)

})

//=============================================================== BOTAO 50 TREINOS GENERAIS========================================================================
var TreinoGen = ""

            $("#StopTreinoGenerais").click(function() {
                $("#bntTreinoGenerais").trigger('pause');
                $("#bntTreinoGenerais").prop("currentTime", 0);
                $("#bntTreinoGenerais").css("display", "block");
                $("#StopTreinoGenerais").css("display", "none");
                clearInterval(TreinoGen);
            });


            $("#bntTreinoGenerais").click(function() {
                $("#bntTreinoGenerais").trigger('play');
                $("#bntTreinoGenerais").css("display", "none");
                $("#StopTreinoGenerais").css("display", "block");

                TreinoGen = console.log('Iniciar Treino dos Governadores ----> OK');


setTimeout(function tgen(){

   console.log('Abre o Teclado ----> OK');
    $('.ui-small-icon.hot-keys')[0].click()

setTimeout(function(){

   console.log('Abrindo Palácio ----> OK');
    $('.hotkey.palace.ui-ib')[0].click()
    },4000)

setTimeout(function(){

   console.log('Vai para o treino de Generais ----> OK');
    xajax_viewPalace('Palace', {tab:'3', subTab:'training'})
    },6000)

setTimeout(function(){

   console.log('Iniciar Repetição ----> OK');
   loop_50x()
    },7000)

    },3000)

})

//-----------------------ACHAR OVOS---------------------------------------------

var acharovos = "";

$("#Stopacharovos").click(function() {
    $("#bntacharovos").trigger('pause');
    $("#bntacharovos").prop("currentTime", 0);
    $("#bntacharovos").css("display", "block");
    $("#Stopacharovos").css("display", "none");
    clearInterval(acharovos);
});

$("#bntacharovos").click(function() {
    $("#bntacharovos").trigger('play');
    $("#bntacharovos").css("display", "none");
    $("#Stopacharovos").css("display", "block");

    acharovos = setInterval(function() {
        searchForEggsWithIds(ids);
    }, 4000); // Intervalo de 4 segundos

    var ids = prompt("Insira os IDs das cidades separados por vírgula:").split(",");

    function searchForEggsWithIds(ids) {
        ids.forEach(function(id) {
            console.log("Executando busca para ID:", id); // Adicione esta linha

            xajax_searchForEggs(container.open({saveName:'eggsSearch', title:'Caçar ovos'}), {id: id}, function() {
                      console.log("Busca concluída para ID:", id);
                    });
                  });
                }
      });

      //-----------------------ACHAR BOLAS---------------------------------------------

var acharbolas = "";

$("#Stopacharbolas").click(function() {
    $("#bntacharbolas").trigger('pause');
    $("#bntacharbolas").prop("currentTime", 0);
    $("#bntacharbolas").css("display", "block");
    $("#Stopacharbolas").css("display", "none");
    clearInterval(acharbolas);
});

$("#bntacharbolas").click(function() {
    $("#bntacharbolas").trigger('play');
    $("#bntacharbolas").css("display", "none");
    $("#Stopacharbolas").css("display", "block");

    acharbolas = setInterval(function() {
        searchForEggsWithIds(ids);
    }, 7000); // Intervalo de 7 segundos
    
    var ids = prompt("Insira os IDs das cidades separados por vírgula:").split(",");
    
    function searchForEggsWithIds(ids) {
        var completedSearches = 0;
    
        ids.forEach(function(id, index) {
            setTimeout(function() {
                console.log("Executando busca para ID:", id);
    
                xajax_searchForBalls(container.open({saveName:'ballsSearch', title:'Caça às bolas'}), {id: id}, function() {
                    console.log("Busca concluída para ID:", id);
                    completedSearches++;
    
                    if (completedSearches === ids.length) {
                        alert("Todas as buscas foram concluídas!");
                    }
                });
            }, index * 5000); // Atraso de 3 segundos entre cada iteração
        });
    }
    
      });




          //-----------------------EXTRAIR NUMEROS DE CIDADADES INDEPENDENTES---------------------------------------------



// Simulator -----------------------------------------------------------------------------------------

    var newContTop
    var newContBot


    function CloneGenerals() {

        if (newContTop !== null) {
            newContTop.html('')
            newContTop.append($('#simulator-generals-top .simulator-general-holder').clone())
        }

        if (newContBot !== null) {
            newContBot.html('')
            newContBot.append($('#simulator-generals-bottom .simulator-general-holder').clone())
        }
    }

    function OnSimulator() {

        newContTop = $('<div></div>')
        $('#simulator-army-top').after(newContTop)

        newContBot = $('<div></div>')
        $('#simulator-army-bottom').after(newContBot)

        CloneGenerals()

        $('.table-header-icons.army').parent().click(function() {
            CloneGenerals()
        })
        $('.table-header-icons.settings').parent().click(function() {
            newContTop.html('')
            newContBot.html('')
        });
        $('.table-header-icons.generals').parent().click(function() {
            newContTop.html('')
            newContBot.html('')
        });
    }

    function hookFunctiono(object, functionName, callback) {
        (function(originalFunction) {
            object[functionName] = function () {
                var returnValue = originalFunction.apply(this, arguments)
                callback.apply(this, arguments);
                return returnValue
            }
        }(object[functionName]))
    }

    function InitSimulator() {
        hookFunctiono(container, 'onLoad', function(arg1)
                      {
            if (typeof arg1 != 'undefined')
            {
                if (arg1 == 'operation-center' || arg1 == 'OperationCenter')
                {
                    var opc = $('#operation-center')
                    var simulatorsTab = $('.tab-simulators', opc)

                    if (simulatorsTab.hasClass('active'))
                    {
                        OnSimulator()
                    }
                }
                else if (arg1 == 'simulator-generals-top' || arg1 == 'simulator-generals-bottom') {
                    CloneGenerals()
                }
            }
        });
    }

    $(document).ready(function()
                      {
        function InitCheckSimulator() {
            if (typeof container !== 'undefined')
            {
                InitSimulator()
            }
            else
            {
                setTimeout(InitCheckSimulator, 500)
            }
        }
        InitCheckSimulator()
    })

// ----------------------------------ATACAR CIDADES INDEPENDENTES-----------------------------------------------------------------

const button = $("<button></button>").addClass("sim-skill skill-406 tooltip-arrow ui-pass").css({
    "display": "inline-block",
    "width": "32px",
    "height": "32px",
    "position": "fixed",
    "bottom": "33px",
    "left": "100px",
    "border": "1px solid #F0DEB2",
    "border-radius": "3px",
    "box-shadow": "0 0 2px #000"
}).attr("title", "Atacar Cidades Independentes").on("click", createCustomWindow);


$("body").append(button);

// Criando a janela ----------------------------------------------------------------------------------

function createCustomWindow() {
	var contador = 1; // valor inicial do contador
	let teste = [];
	$(document).ready(function() {
		var cssContent = {
			width: '800px',
			height: '500px',
			left: '30%',
			top: '50%',
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: '#00FF7F',
			border: '2px solid black',
			padding: '0px',
			borderRadius: '9px',
			position: 'flex'
		};
		var cssTitle = {
			color: '#fff'
		};
// ---------------------------------------------------------------------------------------------------
		var divContent = $('<div>', {
				id: 'messageboxcustomWindow',
				class: 'window-wrapper active ui-draggable',
				css: cssContent,
				append: $('<div>', {
					class: 'window-title',
					css: cssTitle,
					append: [
						$('<span>', {
							class: 'txt-title',
							text: '💎Atacar Cidades Independentes💎'
						}),
						$('<a>', {
							class: 'ui-ib fright close',
							href: 'javascript:void(0)',
							title: 'Fechar',
							click: closeCustomWindow
						})
					]
				})
			})
			.appendTo('body').draggable({
				handle: ".window-title",
				containment: "parent"
			});

// ---------------------------------------------------------------------------------------------------

// Cria a div do botões ------------------------------------------------------------------------------

		const div_botoes = $('<div>', {
			class: 'div_botões',
			css: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',

			}
		});

// Cria 2 colunas na div botões ----------------------------------------------------------------------

		const div_coluna1 = $('<div>', {
			//text: 'Coluna 1',
			class: 'coluna 1',
			css: {
				flex: '1',
				display: 'flex', // adiciona esta linha
				flexDirection: 'row', // adiciona esta linha
				justifyContent: 'center', // adiciona esta linha
			}
		});

		const div_coluna2 = $('<div>', {
			//text: 'Coluna 2',
			class: 'coluna2',
			css: {
				flex: '1',
				display: 'flex', // adiciona esta linha
				flexDirection: 'row', // adiciona esta linha
				justifyContent: 'right', // adiciona esta linha
				marginRight: '10px',

			}
		});

		div_botoes.append(div_coluna1, div_coluna2);

// Criar o primeiro botão e adiciona na coluna 1 ------------------------------------------------------
		const btnSalvar = $('<button>', {
			text: 'Salvar',
			class: 'btn_salvar',
			click: function() {
				contador++;
				//cria()
			},
			css: {
				width: '80px',
				height: '18px',
				display: 'flex',
                backgroundColor: '',
				alignItems: 'center',
				justifyContent: 'center',
				border: '2px solid black',
				borderRadius: '6px',
				padding: '10px',
				margin: '10px',
				alignItems: 'center'
			}
		}).appendTo(div_coluna1);

// Criar o segundo botão e adiciona na coluna 1 ------------------------------------------------------
		const btn_ler_cidades = $('<button>', {
			text: 'Ler',
			class: 'ler_cidades',
			click: function() {
				ler_cidades()
			},
			css: {
				width: '80px',
				height: '18px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: '2px solid black',
				borderRadius: '6px',
				padding: '10px',
				margin: '10px',
				alignItems: 'center'
			}
		}).appendTo(div_coluna1);

// ---------------------------------------------------------------------------------------------------

// Abre a Universidade Militar - Oculta --------------------------------------------------------------

		makeFlashAction({
			'action': 'viewResearchList',
			'saveName': 'developmentResearchScienceMilitary',
			'title': 'Militares',
			'params': {
				'tab': 'military',
				'science': true
			}
		});
		$('.window-wrapper.ui-draggable.active').hide();

// Aguarda 2 segundos para ler a qtia de doutrinas ---------------------------------------------------

		setTimeout(function() {
			const levelElement = document.querySelector('.view-11.ui80.village-scale-half .window-wrapper.ui-draggable.io-animm-fix .development-row-258 .th-level .level-value');
			const levelValue = levelElement.textContent.trim();
			console.log(levelValue); // exibe o valor do nível na coluna "th-level"

			localStorage.setItem('levelValue', levelValue);

// Cria o input de Qtia de Ataques -------------------------------------------------------------------

			const doutrina_ = $('<label>', {
				for: 'qtd_ataques',
				class: 'dout_qtd_ataques',
				text: 'Qtd de Ataques:'

			});

// ---------------------------------------------------------------------------------------------------

			$('<input>', {
				type: 'text',
				id: 'qtd_ataques',
				class: 'inp_qtd_ataques',
				css: {
					width: '30px',
					border: '2px solid black',
					borderRadius: '6px',
					height: '10px',
					padding: '5px',
					margin: '10px',
					textAlign: 'center',
				},
				value: JSON.parse(localStorage.getItem('qtd_ataques')) || ''
			}).on('input', function() {
				const doutrinas = $(this).val();
				localStorage.setItem('qtd_ataques', JSON.stringify(doutrinas));
			}).appendTo(doutrina_);
$('<span>', {
				text: '  ' + levelValue + '  ',
				class: 'level-value max',
			    title: 'Nível de sua Doutrina Militar ',
				css: {
					color: 'blue',
					fontWeight: 'bold',
					padding: '0px',
					margin: '2px',
				}
			}).appendTo(doutrina_);
			div_coluna2.append(doutrina_);

		}, 10000);

// ---------------------------------------------------------------------------------------------------
/*const nivelPrefixoCidade = {
  1001: 'cid_1001',
  1002: 'cid_1002',
  1003: 'cid_1003',
  1004: 'cid_1004',
  1005: 'cid_1005',
  1006: 'cid_1003',
  1007: 'cid_1007',
  1008: 'cid_1008',
  1009: 'cid_1009',
  1010: 'cid_1010',
  1011: 'cid_1011',
  1012: 'cid_1012',
  1013: 'cid_1013',
  1014: 'cid_1014',
  // adicione aqui outros níveis e seus prefixos correspondentes
};
*/
// Adicionar a div botões à divContent ---------------------------------------------------------------

		div_botoes.appendTo(divContent);

// Cria div das linhas de ataque ---------------------------------------------------------------------

		const div_a = $('<div>', {
			id: 'div_a',
			class: 'class div_a',
			css: {
				width: '760px',
				height: '390px',
				left: '1px',
				hight: '1px',
				top: '2px',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#FFF5EE',
				border: '2px solid black',
				padding: '12px',
				borderRadius: '7px',
				position: 'flex',
				position: 'flex',
				margin: '2px auto 0' // adicionado 70px de margem superior
			}
		})
		div_a.appendTo(divContent);

// ---------------------------------------------------------------------------------------------------

// Cria as linhas de configuração --------------------------------------------------------------------
		for (let i = contador; i <= 6; ++i) {
			const divInputs = $('<div>', {
				class: 'inputs-container',
				id: 'linha' + i,
				css: {
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					border: '2px solid black',
					borderRadius: '50px',
					padding: '12px',
					marginBottom: '10px'
				},
				append: [

// ---------------------------------------------------------------------------------------------------

// Mapeia cada nível para o prefixo correspondente do identificador da cidade

// Cria o Campo Nível
$('<label>', {
    for: `Nível-${i}`,
    text: 'Nível:'

}),
$('<select>', {
    id: `Nível-${i}`,
    css: {
        width: '50px',
        height: '23px',
        borderRadius: '6px',
        marginRight: '10px'
    },
    append: Array.from({
        length: 15
    }, (_, j) => $('<option>', {
        value: 1000 + j + 1,
        text: (0 + j + 1).toString()
    })),
    // Preenche o valor do select com o valor salvo no localStorage
    val: JSON.parse(localStorage.getItem(`Nível-${i}`)) || ''
}).on('change', function() {
    const nivel = $(this).val();

    // Salva o valor do select no localStorage
    localStorage.setItem(`Nível-${i}`, JSON.stringify(nivel));

    // Preenche o valor do input com o valor correspondente
    const cidades = window[`cid_${nivel}`];
    $(`#n_cidades-${i}`).val(cidades);

    // Salva o valor do input no localStorage
    localStorage.setItem(`n_cidades-${i}`, JSON.stringify(cidades));
}),

// Cria o Input do Numero de Cidades
$('<label>', {
    for: `n_cidades-${i}`,
    text: 'Cidades:'
}),

// Obtém a lista de valores salvos no localStorage e preenche o valor do input
$('<input>', {
    type: 'text',
    id: `n_cidades-${i}`,
    css: {
        width: '320px',
        height: '23px',
        borderRadius: '6px',
        marginRight: '10px'
    },

    // Preenche o valor do input com os valores salvos no localStorage
    value: JSON.parse(localStorage.getItem(`n_cidades-${i}`)) || ''
}).on('input', function() {
    const cidades = $(this).val();

    // Salva a nova lista de valores no localStorage
    localStorage.setItem(`n_cidades-${i}`, JSON.stringify(cidades));
}),

// Cria o Campo Formação -----------------------------------------------------------------------------
					$('<label>', {
						for: `n_form-${i}`,
						text: 'Formação:'
					}),
					$('<select>', {
						id: `n_form-${i}`,
						css: {
							width: '50px',
							height: '23px',
							borderRadius: '6px',
							marginRight: '10px'
						},
						append: Array.from({
							length: 10
						}, (_, j) => $('<option>', {
							value: -1 + j + 1,
							text: (0 + j + 1).toString()
						})),
						// Preenche o valor do select com o valor salvo no localStorage
						val: JSON.parse(localStorage.getItem(`n_form-${i}`)) || ''
					}).on('change', function() {
						const formacao = $(this).val();

						// Salva o valor do select no localStorage
						localStorage.setItem(`n_form-${i}`, JSON.stringify(formacao));
					}),
// ---------------------------------------------------------------------------------------------------

// Cria o Botão de Atacar ----------------------------------------------------------------------------
					$('<button>', {
						text: 'Atacar',
						css: {
							width: '70px',
							border: '2px solid black',
							borderRadius: '6px'
						},
						click: function() {
							AtacarTodos(`Nível-${i}`, `n_cidades-${i}`, `n_form-${i}`, `provinceIds-${i}`);
						}
					})

// ---------------------------------------------------------------------------------------------------

				]
			})
			divInputs.appendTo(div_a);

		}
	})
}

// ---------------------------------------------------------------------------------------------------

function closeCustomWindow() {
	$('#messageboxcustomWindow').remove();
}

// ---------------------------------------------------------------------------------------------------

function AtacarTodos(nivelId, cidadesId, formacaoId) {
  var level = $('#' + nivelId).val();
  var cities = $('#' + cidadesId).val();
  var formation = $('#' + formacaoId).val();
  var qtd_at = $('#qtd_ataques').val();
  var totalCities = qtd_at; // armazena o número total de cidades a serem atacadas
  var attackedCities = 0; // armazena quantas cidades já foram atacadas

  console.log('Executar ' + qtd_at + ' ataques', 'Atacando com nível:', level, 'cidades:', cities, 'formação:', formation);

  // Separa a lista de cidades em um array de cidades separadas
  var citiesArray = cities.split(',');

  // Seleciona apenas as três primeiras cidades
  var selectedCities = citiesArray.slice(0, qtd_at);

  // Itera sobre o array de cidades selecionadas e ataca cada uma delas
  selectedCities.forEach(function(city, index) {
    setTimeout(function() {
      console.log('Atacando cidade ' + city);

      xajax_viewOperationCenter(container.open({
        saveName: 'operation-center',
        title: 'Centro de Comando'
      }), {
        'tab': 'attack',
        'userId': level,
        'provinceId': city
      });

      SetFocusTop();

      setTimeout(function() {
        $('#preset' + formation).click();
      }, 2000);

      setTimeout(function() {
        $('#attackType').val('1');
        xajax_doAttack('OperationCenter', xajax.getFormValues('sendAttackForm'));

        // incrementa a variável attackedCities a cada ataque
        attackedCities++;

        // Se já foram atacadas as "qtd_at" primeiras cidades, para de iterar
        if (attackedCities >= totalCities) {
          alert('Ataques concluídos!');
        }
      }, 4000);
    }, index * 8000); // Aguarda 8 segundos entre cada ataque
  });
}

// ---------------------------------------------------------------------------------------------------

// função para ler todas as cidades de todos os níveis que estejam espiadas --------------------------

function ler_cidades() {
	async function extractCityNumbersFromReport(reportId) {
		const saveName = `mass-spy-report-${reportId}`;
		const title = 'Espionagem em massa: Cidade independente';

		// Abrir o relatório usando xajax_doMassSpy
		xajax_doMassSpy(container.open({
			saveName,
			title
		}), {
			uId: reportId
		});
		$('.window-wrapper.ui-draggable.active').hide();

		// Esperar um breve momento (por exemplo, 1 segundo) para o relatório ser carregado
		await new Promise(resolve => setTimeout(resolve, 1000));

		// Extrair as informações do relatório e exibi-las no console, se houver informações de cidade
		const elementId = `#messageboxmass-spy-report-${reportId}`;
		const element = document.querySelector(elementId);

		if (element) {
			const cityNumbers = Array.from(element.querySelectorAll('td span.prov-pict[title]'), citySpan => citySpan.getAttribute('title').match(/\d+/)[0]);

			if (cityNumbers.length > 0) {
				const varName = `cid_${reportId}`;
				window[varName] = cityNumbers;
				localStorage.setItem(varName, JSON.stringify(cityNumbers));
				console.log(`Cidades Nível ${reportId}: ${cityNumbers.join(', ')}`);
			}
		}
	}

	async function extractCityNumbersFromReports() {
		for (let i = 1001; i <= 1015; i++) {
			await extractCityNumbersFromReport(i);
		}
	}

	extractCityNumbersFromReports();

}
//ler_cidades()


/*//=================================================ATACAR BARBAROS===================================================

(function() {
    'use strict';

    function createCustomWindow() {
        // Defina aqui o que deseja que aconteça quando o botão for clicado
        alert("DISPONIVEL EM BREVE!");
    }

    const button = $("<button></button>").addClass("ui-icon ui-main ui-fast-attack-barb").css({
        "display": "inline-block",
        "width": "32px",
        "height": "32px",
        "position": "fixed",
        "bottom": "30px",
        "left": "150px", // Você pode ajustar este valor para mover o botão mais para a direita
        "border": "1px solid #F0DEB2",
        "border-radius": "3px",
        "box-shadow": "0 0 2px #000"
    }).attr("title", "Atacar Barbáros").on("click", createCustomWindow);

    $("body").append(button);
})();
//=================================================BUSCAR NO MAPA GLOBAL===================================================

(function() {
    'use strict';

    function createCustomWindow() {
        // Defina aqui o que deseja que aconteça quando o botão for clicado
        alert("DISPONIVEL EM BREVE!");
    }

    const button = $("<button></button>").addClass("sim-skill skill-435 tooltip-arrow ui-pass").css({
        "display": "inline-block",
        "width": "32px",
        "height": "32px",
        "position": "fixed",
        "bottom": "67px",
        "left": "150px", // Você pode ajustar este valor para mover o botão mais para a direita
        "border": "1px solid #F0DEB2",
        "border-radius": "3px",
        "box-shadow": "0 0 2px #000"
    }).attr("title", "Buscar no Mapa").on("click", createCustomWindow);

    $("body").append(button);
})();

            //=================================================DEPOSITO DE OURO===================================================

(function() {
    'use strict';

    function createCustomWindow() {
        // Defina aqui o que deseja que aconteça quando o botão for clicado
        alert("DISPONIVEL EM BREVE!");
    }

    const button = $("<button></button>").addClass("person-skill sim-skill skill-412").css({
        "display": "inline-block",
        "width": "32px",
        "height": "32px",
        "position": "fixed",
        "bottom": "69px",
        "left": "100px", // Você pode ajustar este valor para mover o botão mais para a direita
        "border": "1px solid #F0DEB2",
        "border-radius": "3px",
        "box-shadow": "0 0 2px #000"
    }).attr("title", "Depositos Automaticos").on("click", createCustomWindow);

    $("body").append(button);
})();
            //=================================================ENVIAR ESPIOES NO MAPA===================================================

(function() {
    'use strict';

    function createCustomWindow() {
        // Defina aqui o que deseja que aconteça quando o botão for clicado
        alert("DISPONIVEL EM BREVE!");
    }

    const button = $("<button></button>").addClass("sim-skill skill-436 tooltip-arrow ui-pass").css({
        "display": "inline-block",
        "width": "32px",
        "height": "32px",
        "position": "fixed",
        "bottom": "69px",
        "left": "50px", // Você pode ajustar este valor para mover o botão mais para a direita
        "border": "1px solid #F0DEB2",
        "border-radius": "3px",
        "box-shadow": "0 0 2px #000"
    }).attr("title", "Depositos Automaticos").on("click", createCustomWindow);

    $("body").append(button);
})();

*/
//-============================================ FUNÇAO LER CIDADES INDEPENDENTES===================

       (function() {
    'use strict';

    async function ler_cidades() {
        async function extractCityNumbersFromReport(reportId) {
            const saveName = `mass-spy-report-${reportId}`;
            const title = 'Espionagem em massa: Cidade independente';

            // Abrir o relatório usando xajax_doMassSpy
            xajax_doMassSpy(container.open({
                saveName,
                title
            }), {
                uId: reportId
            });
            $('.window-wrapper.ui-draggable.active').hide();

            // Esperar um breve momento (por exemplo, 2 segundos) para o relatório ser carregado
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Extrair as informações do relatório e exibi-las no console, se houver informações de cidade
            const elementId = `#messageboxmass-spy-report-${reportId}`;
            const element = document.querySelector(elementId);

            if (element) {
                const cityNumbers = Array.from(element.querySelectorAll('td span.prov-pict[title]'), citySpan => {
                    const match = citySpan.getAttribute('title').match(/\d+/);
                    return match ? match[0] : null;
                }).filter(cityNumber => cityNumber !== null);

                if (cityNumbers.length > 0) {
                    const varName = `cid_${reportId}`;
                    window[varName] = cityNumbers;
                    localStorage.setItem(varName, JSON.stringify(cityNumbers));
                    console.log(`Cidades Nível ${reportId}: ${cityNumbers.join(', ')}`);
                    return { level: reportId, cities: cityNumbers }; // Retorna objeto com nível e números das cidades
                }
            }
            return null;
        }

        async function extractCityNumbersFromReports() {
            const allCityData = [];
            for (let i = 1001; i <= 1015; i++) {
                const cityData = await extractCityNumbersFromReport(i);
                if (cityData) {
                    allCityData.push(cityData);
                }
            }
            return allCityData;
        }

        function formatCityData(cityData) {
            const formattedData = cityData.map(data => `Cidades Nível ${data.level}: ${data.cities.join(', ')}`);
            return formattedData.join('\n\n');
        }

        function downloadFile(content, fileName, contentType) {
            const a = document.createElement("a");
            const file = new Blob([content], { type: contentType });
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }

        // Extraímos todos os números das cidades e os salvamos em um arquivo
        extractCityNumbersFromReports().then(allCityData => {
            if (allCityData.length > 0) {
                const fileContent = formatCityData(allCityData);
                downloadFile(fileContent, 'cidades_por_nivel.txt', 'text/plain');
            }
        });
    }

    // Função para criar e adicionar o botão
    function addButton() {
        const button = document.createElement('button');
        button.innerHTML = 'Ler'; // Adiciona quebra de linha com <br>
        button.className = 'button';  // Adiciona a classe "button"
        button.type = 'button';       // Define o tipo "button"
        button.style.width = '20px';  // Define a largura do botão
        button.style.height = '20px'; // Define a altura do botão
        button.style.position = 'fixed';
        button.style.bottom = '80px'; // Define a posição do botão a partir da parte inferior
        button.style.right = '60px';   // Define a posição do botão a partir da direita
        button.style.zIndex = 800;
        button.style.padding = '10px';
        button.style.backgroundColor = '#8B4513'; // Define a cor de fundo do botão (castanho)
        button.style.color = '#fff';
        button.style.border = '1px solid #000'; // Define a borda preta
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.textAlign = 'center'; // Centraliza o texto
        button.setAttribute("title", "Ler Cidades Espiadas e Exportar em .txt");
        button.addEventListener('click', ler_cidades);

        document.body.appendChild(button);
    }


    // Adiciona o botão ao carregar a página
    window.addEventListener('load', addButton);
})();

  
                


            // ==================================================================== FUNÇÕES INICIADAS COM SCRIPT ================================================================
            setTimeout(function() {
                $("#wc-newsfeed-controls-widget .newsfeed-controls.ui-icons.arrow-down")[0].click();
            }, 3000);
                        // ==========================================================================      FINAL    ========================================================================

}) // final função validação