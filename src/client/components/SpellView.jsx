
import { UnitModal } from './core/UnitModal';
import { FancyText } from './core/FancyText';
import { CompositeStat } from './core/CompositeStat';

export class SpellView extends React.Component {
  
  showSpell(spellId) {
    return () => {
      $('#' + spellId).toggleClass('expanded');
    }
  }

  render() {
    const spell = this.props.spell;
    const context = this.props.context;
    const zeroLevelName = 'cantrip';

    return (<div className='spell'>
      <div className="spell-level">{spell.level === 0 ? zeroLevelName: 'level ' + spell.level}</div>
      <div className="spell-school">{spell.school}</div>
      <div
        className="extra-info-toggle"
        onClick={this.showSpell(spell.id)}>
        {spell.short_description}
      </div>
      <div className="extra-info">
        <div className="col-xs-12">
          range: <UnitModal
            text={'Range: ' + spell.range.toString()}
            unit={spell.range}
            context={context}
          />
        </div>
        { spell.effect?
          <div className="action col-xs-12">
            <div className="col-xs-6 target">
              {spell.target?
                <UnitModal
                  text={'Target: ' + spell.target.toString()}
                  unit={spell.target}
                  context={context}
                />
                :
                <span>-</span>
              }
            </div>
            <div className="col-xs-6 save">
              {spell.effect.save?
                <span>{spell.effect.save.type} <CompositeStat
                  contextName={ spell.effect.save.type + ' Save: '}
                  stat={spell.dc}
                /> {spell.effect.save.isHarmless?'(harmless)':''}</span>
                :
                <span>-</span>
              }
            </div>
            <div className="col-xs-12 effect-text">
              <FancyText
                context={context}
                text={spell.effect.text}/>
            </div>
            <div className="col-xs-12 duration">
              {spell.effect.duration?
                <span>lasts for <UnitModal
                text={'Duration: ' + spell.effect.duration.toString()}
                unit={spell.effect.duration}
                context={context}
              /></span>
              :
              <span>instantaneous</span>
            }
            </div>
          </div>
        :<span>no description</span>}
      </div> {/* end extra-info container */}
    </div>);
  }
}
