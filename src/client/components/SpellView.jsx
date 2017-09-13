
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
    if( ! spell.duration.getType ) {
      console.log(spell);
    }

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
              {spell.save && spell.dc ?
                <span>{spell.save.type} <CompositeStat
                  contextName={ spell.save.type + ' Save: '}
                  stat={spell.dc}
                /> {spell.save.isHarmless?'(harmless)':''}</span>
                :
                <span>-</span>
              }
            </div>
            <div className="col-xs-12 effect-text">
              <FancyText
                context={context}
                text={spell.text}/>
            </div>
            <div className="col-xs-12 duration">
              {spell.duration ?
                <span>lasts for <UnitModal
                text={'Duration: ' + spell.duration.toString()}
                unit={spell.duration}
                context={context}
              /></span>
              :
              <span className="duration">instantaneous</span>
            }
            </div>
          </div>
      </div> {/* end extra-info container */}
    </div>);
  }
}
